/**
 * Conversion d'un flux SSE (format du provider) en flux de texte brut.
 *
 * Le provider envoie, quand stream=true :
 *
 *   data: {"choices":[{"delta":{"content":"Toandro"}}]}\n\n
 *   data: {"choices":[{"delta":{"content":" est"}}]}\n\n
 *   data: [DONE]\n\n
 *
 * On en extrait uniquement les fragments de texte et on les reemet tels quels.
 * Le navigateur n'aura donc plus qu'a concatener ce qu'il recoit.
 */

/**
 * PIEGE CENTRAL : la decoupe reseau ne respecte pas la decoupe SSE.
 *
 * Le protocole TCP livre des paquets d'octets, pas des lignes. Un chunk peut
 * tres bien se terminer au milieu d'un JSON :
 *
 *   chunk 1 : 'data: {"choices":[{"delta":{"cont'
 *   chunk 2 : 'ent":"Toandro"}}]}\n\ndata: {"choi'
 *
 * Si on parse chunk par chunk, JSON.parse echoue de facon aleatoire selon la
 * latence reseau -- le pire type de bug : intermittent et non reproductible en
 * local. La parade est un buffer : on accumule, on ne traite que les lignes
 * COMPLETES, et on garde le reste pour le tour suivant.
 */
export function sseToTextStream(upstreamResponse, { signal } = {}) {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      const reader = upstreamResponse.body.getReader();
      let buffer = "";

      try {
        for (;;) {
          // Le visiteur a ferme le chat : inutile de continuer a consommer
          // des tokens pour une reponse que personne ne lira.
          if (signal?.aborted) break;

          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          // La derniere entree est potentiellement une ligne tronquee :
          // on la remet dans le buffer au lieu de la parser.
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue; // lignes vides, commentaires ':'

            const payload = trimmed.slice(5).trim();
            if (payload === "[DONE]") {
              controller.close();
              return;
            }

            try {
              const event = JSON.parse(payload);
              // Forme OpenAI-compatible : choices[0].delta.content
              const text = event.choices?.[0]?.delta?.content;
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              // Un event non-JSON n'est pas fatal : on l'ignore et on continue.
              // Interrompre tout le flux pour une ligne malformee serait pire.
            }
          }
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      } finally {
        // Toujours liberer la connexion vers le provider, meme en cas d'erreur.
        reader.releaseLock?.();
        upstreamResponse.body.cancel?.().catch(() => {});
      }
    },
  });
}

/**
 * Les en-tetes qui rendent le streaming reellement progressif.
 *
 * Sans elles, un proxy (Nginx, un CDN, Vercel) peut accumuler toute la reponse
 * avant de la transmettre : le flux fonctionne techniquement, mais le visiteur
 * voit un long silence puis le texte d'un bloc. Tout le benefice disparait.
 */
export const STREAM_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  // no-transform interdit explicitement aux intermediaires de bufferiser
  // ou recompresser la reponse.
  "Cache-Control": "no-cache, no-transform",
  // Specifique a Nginx : desactive le buffering du reverse proxy.
  // Inutile sur Vercel, indispensable si tu deploies un jour sur VPS.
  "X-Accel-Buffering": "no",
  Connection: "keep-alive",
};
