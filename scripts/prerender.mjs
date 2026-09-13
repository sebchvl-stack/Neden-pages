// Pré-rendu statique des pages publiques — nécessaire parce que Google
// OAuth Branding vérifie la page d'accueil et la page de confidentialité
// avec un robot qui NE LANCE PAS JavaScript (contrairement à Googlebot pour
// l'indexation classique). Sans ça, ce robot ne voit que
// <div id="root"></div> vide — d'où "contenu insuffisant" / "n'explique pas
// l'objectif" même avec du vrai contenu dans l'app.
//
// Aucune dépendance lourde (pas de navigateur headless, portable partout
// — y compris le serveur de build Cloudflare qui reconstruit le site à
// chaque push) : utilise react-dom/server (déjà fourni par react-dom) via
// le bundle SSR généré par `vite build --ssr` (voir package.json).
//
// Pour chaque route : rend le HTML côté serveur, l'injecte dans le gabarit
// dist/index.html à la place de <div id="root"></div>, corrige le <title>
// et les balises meta/OG pour cette route précise (même contenu que
// src/hooks/useDocumentMeta.ts, qui ne s'exécute que côté navigateur — voir
// son commentaire), puis écrit le résultat à l'emplacement que Workers
// Static Assets sert pour cette URL.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

const ROUTES = [
  {
    path: '/',
    titre: 'NEDEN — Sébastien Cheval',
    description:
      "Profil hybride technique, produit et design. Compétences, expériences, réalisations, et NEDEN — l'orchestrateur personnel construit au quotidien."
  },
  {
    path: '/confidentialite',
    titre: 'Politique de confidentialité — NEDEN',
    description:
      "Ce que NEDEN fait des données Google auxquelles l'application accède, et ce qu'elle n'en fait pas."
  },
  {
    path: '/cgu',
    titre: "Conditions d'utilisation — NEDEN",
    description: "Conditions d'utilisation de NEDEN, l'orchestrateur personnel de Sébastien Cheval."
  }
];

function injectMeta(html, route) {
  const url = `https://neden.fr${route.path}`;
  return html
    .replace(/<title>.*?<\/title>/, `<title>${route.titre}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${route.titre}"`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${route.description}"`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${route.description}"`
    );
}

async function main() {
  const template = readFileSync(join(DIST, 'index.html'), 'utf-8');
  const { render } = await import(join(ROOT, 'dist-ssr', 'entry-server.js'));

  for (const route of ROUTES) {
    const appHtml = render(route.path);
    const finalHtml = injectMeta(template, route).replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    const outDir = route.path === '/' ? DIST : join(DIST, route.path.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), finalHtml, 'utf-8');
    console.log(`✅ Pré-rendu ${route.path} -> ${outDir.replace(ROOT + '/', '')}/index.html`);
  }
}

main().catch((err) => {
  console.error('❌ Pré-rendu échoué:', err);
  process.exit(1);
});
