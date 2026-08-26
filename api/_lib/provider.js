/**
 * Couche d'abstraction du fournisseur de LLM.
 *
 * Tous les providers listes ici parlent le meme protocole : "OpenAI-compatible".
 * Concretement, ils exposent tous un endpoint POST {baseURL}/chat/completions
 * qui accepte le meme JSON :
 *
 *   { model, messages: [{role, content}], stream, temperature, max_tokens }
 *
 * Consequence : changer de modele = changer des variables d'environnement,
 * jamais du code.
 */

const PROVIDERS = {
  groq: {
    baseURL: "https://api.groq.com/openai/v1",
    envKey: "GROQ_API_KEY",
    defaultModel: "llama-3.3-70b-versatile",
  },
  openrouter: {
    baseURL: "https://openrouter.ai/api/v1",
    envKey: "OPENROUTER_API_KEY",
    defaultModel: "meta-llama/llama-3.3-70b-instruct:free",
  },
  gemini: {
    // Google expose une facade OpenAI-compatible en plus de son SDK maison.
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
    envKey: "GEMINI_API_KEY",
    defaultModel: "gemini-2.0-flash",
  },
  cerebras: {
    baseURL: "https://api.cerebras.ai/v1",
    envKey: "CEREBRAS_API_KEY",
    defaultModel: "llama-3.3-70b",
  },
  // Provider factice : aucun appel reseau, aucune cle, aucun token consomme.
  // Sert a developper l'interface et a tester le parseur SSE.
  mock: { mock: true },
};

export function getProviderConfig() {
  const name = process.env.LLM_PROVIDER;

  if (!name) {
    throw new Error(
      "LLM_PROVIDER non defini. Valeurs possibles : " +
        Object.keys(PROVIDERS).join(", ")
    );
  }

  const provider = PROVIDERS[name];
  if (!provider) {
    throw new Error(
      `LLM_PROVIDER="${name}" inconnu. Valeurs possibles : ` +
        Object.keys(PROVIDERS).join(", ")
    );
  }

  if (provider.mock) return { name, mock: true, model: "mock" };

  const apiKey = process.env[provider.envKey];
  if (!apiKey) {
    throw new Error(`Cle manquante : definis ${provider.envKey} dans .env.local`);
  }

  return {
    name,
    baseURL: provider.baseURL,
    apiKey,
    model: process.env.LLM_MODEL || provider.defaultModel,
  };
}

/**
 * Fabrique une Response identique a celle d'un vrai provider en mode stream.
 *
 * Point important : on genere de VRAIS evenements SSE, et on decoupe les chunks
 * a des endroits arbitraires -- parfois au milieu d'un JSON. C'est exactement ce
 * que fait le reseau. Si notre parseur tient ici, il tiendra en production.
 */
function mockStreamResponse(messages) {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const reply =
    "Ceci est une reponse simulee du provider mock. " +
    `Ta question etait : "${(lastUser?.content ?? "").slice(0, 60)}". ` +
    "Aucun token n'a ete consomme, aucune cle API n'est necessaire. " +
    "Utilise ce mode pour developper l'interface du chat tranquillement.";

  // Decoupage en pseudo-tokens, comme le ferait un vrai modele.
  const tokens = reply.match(/\S+\s*/g) ?? [];

  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      // On construit le flux SSE complet...
      let sse = "";
      for (const token of tokens) {
        sse += `data: ${JSON.stringify({ choices: [{ delta: { content: token } }] })}\n\n`;
      }
      sse += "data: [DONE]\n\n";

      // ...puis on l'emet en tranches de taille arbitraire (37 octets), ce qui
      // coupe volontairement au milieu des JSON pour eprouver le buffer.
      const bytes = encoder.encode(sse);
      const SLICE = 37;
      for (let i = 0; i < bytes.length; i += SLICE) {
        controller.enqueue(bytes.slice(i, i + SLICE));
        // Petite latence pour rendre le streaming visible a l'oeil nu.
        await new Promise((r) => setTimeout(r, 25));
      }
      controller.close();
    },
  });

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/event-stream" },
  });
}

/**
 * Appelle le provider.
 *
 * On utilise fetch() brut plutot qu'un SDK : chaque SDK (openai, groq-sdk,
 * @google/genai) impose ses conventions, alors que le protocole HTTP sous-jacent
 * est identique. fetch() nous garde portables et sans dependance.
 */
export async function callLLM({ messages, stream = false, signal }) {
  const config = getProviderConfig();

  if (config.mock) return mockStreamResponse(messages);

  const response = await fetch(`${config.baseURL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      stream,
      temperature: 0.6,
      max_tokens: 800,
    }),
    signal,
  });

  if (!response.ok) {
    // On lit le corps de l'erreur : les providers y mettent la vraie cause
    // (modele inexistant, quota depasse, cle invalide...).
    const detail = await response.text();
    throw new Error(
      `Provider ${config.name} a repondu ${response.status} : ${detail.slice(0, 500)}`
    );
  }

  return response;
}
