import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { loadEnv } from "vite";

/**
 * Plugin de developpement : reproduit en local ce que Vercel fait en prod.
 *
 * En production, Vercel scanne le dossier api/ et transforme chaque fichier en
 * fonction serverless : api/chat.js devient l'URL /api/chat. En local, le
 * serveur de dev de Vite ne connait que le front. Ce plugin comble le trou.
 *
 * Ce n'est PAS du code de production : il ne s'active que pendant `npm run dev`.
 * En prod, ce fichier n'existe meme pas dans le bundle.
 */
export function apiPlugin() {
  return {
    name: "local-api-routes",
    // "serve" = uniquement pendant npm run dev, jamais pendant npm run build.
    apply: "serve",

    config(_, { mode }) {
      // Vite n'expose au front que les variables prefixees VITE_ -- c'est une
      // securite. Mais notre code serveur (api/) tourne dans Node et a besoin
      // des vraies cles. Le troisieme argument "" desactive le filtre de prefixe
      // et on injecte tout dans process.env, comme le ferait Vercel.
      const env = loadEnv(mode, process.cwd(), "");
      for (const [key, value] of Object.entries(env)) {
        if (!(key in process.env)) process.env[key] = value;
      }
    },

    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        if (!url.pathname.startsWith("/api/")) return next();

        // /api/chat -> ./api/chat.js
        const route = url.pathname.replace(/^\/api\//, "").replace(/\/$/, "");
        const file = resolve(process.cwd(), "api", `${route}.js`);

        if (!existsSync(file)) {
          res.statusCode = 404;
          return res.end(JSON.stringify({ error: `Route /api/${route} introuvable.` }));
        }

        try {
          // ssrLoadModule recharge le module a chaque requete : tu edites
          // api/chat.js, tu relances la requete, c'est pris en compte.
          // Pas de redemarrage du serveur.
          const mod = await server.ssrLoadModule(file);
          const handler = mod.default;

          // --- Node IncomingMessage  ->  Request (Web standard) -------------
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const bodyBuffer = Buffer.concat(chunks);

          const request = new Request(url.toString(), {
            method: req.method,
            headers: req.headers,
            body: ["GET", "HEAD"].includes(req.method) ? undefined : bodyBuffer,
          });

          const response = await handler(request);

          // --- Response (Web standard)  ->  Node ServerResponse -------------
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));

          if (!response.body) return res.end();

          // Lecture chunk par chunk : indispensable pour le streaming (palier 2).
          // Si on faisait `res.end(await response.text())`, on attendrait la
          // reponse complete avant d'envoyer quoi que ce soit -- ce qui tuerait
          // tout l'interet du streaming.
          const reader = response.body.getReader();
          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(value);
          }
          res.end();
        } catch (error) {
          console.error(`[api/${route}]`, error);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: String(error?.message ?? error) }));
        }
      });
    },
  };
}
