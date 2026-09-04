/**
 * Cloudflare Worker — point d'entrée public app.neden.fr pour l'app NEDEN
 * (Google Apps Script). Reverse-proxy simple : GAS ne peut pas servir un
 * domaine personnalisé directement, ce Worker relaie donc les requêtes
 * vers l'URL /exec réelle en gardant app.neden.fr dans la barre d'adresse.
 *
 * Aucun secret nécessaire : APPS_SCRIPT_EXEC_URL est l'URL /exec publique
 * du déploiement web NEDEN (déjà accessible à quiconque a le lien) — pas
 * une clé, juste plus longue et moins mémorisable. Ne JAMAIS y mettre de
 * clé API ou de token : ce Worker est public.
 *
 * Déploiement (action Sébastien, hors périmètre agent — constitution
 * Principe VII) :
 *   1. `wrangler deploy` (ou Cloudflare dashboard → Workers → coller ce
 *      fichier) sous le compte Cloudflare qui gère neden.fr.
 *   2. Renseigner APPS_SCRIPT_EXEC_URL (variable d'environnement Worker,
 *      pas en dur ici) avec l'URL /exec du déploiement Apps Script actuel.
 *   3. Router app.neden.fr vers ce Worker (Cloudflare → Workers Routes,
 *      ou Custom Domain sur le Worker directement).
 */

export default {
  async fetch(request, env) {
    const execUrl = env.APPS_SCRIPT_EXEC_URL;
    if (!execUrl) {
      return new Response('APPS_SCRIPT_EXEC_URL non configurée sur ce Worker.', { status: 500 });
    }

    const incoming = new URL(request.url);
    const target = new URL(execUrl);
    // Apps Script route tout sur /exec — on ne relaie que la query string
    // (paramètres api_*), jamais le chemin de app.neden.fr, qui n'a pas de
    // sens côté Apps Script.
    target.search = incoming.search;

    const proxied = new Request(target.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
      redirect: 'follow'
    });

    const response = await fetch(proxied);
    // GAS redirige souvent en interne vers googleusercontent.com pour
    // servir le HTML réel — `redirect: 'follow'` ci-dessus le gère déjà
    // côté Worker, donc la réponse renvoyée ici est déjà le contenu final.
    return new Response(response.body, response);
  }
};
