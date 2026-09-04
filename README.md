# Neden-pages

Site public de Sébastien Cheval — neden.fr — React + Vite + React Router,
déployé sur Cloudflare Pages. Sert aussi de page publique (accueil,
confidentialité, conditions) pour la vérification OAuth Google de
l'application NEDEN (dépôt séparé `Neden-application`).

Voir `.specify/memory/constitution.md` pour les principes du projet
(notamment : jamais de contenu biographique/professionnel inventé) et
`specs/001-site-portfolio/spec.md` pour la spécification complète.

## Développement local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # sortie dans dist/
```

## Déploiement (Cloudflare Pages)

1. Connecter ce dépôt GitHub à un projet Cloudflare Pages.
2. Build command: `npm run build` — Output directory: `dist`.
3. `public/_redirects` est copié tel quel dans `dist/` par Vite — il
   redirige toutes les routes vers `index.html` (obligatoire pour une SPA
   React Router sur Cloudflare Pages, sinon `/confidentialite` et `/cgu`
   renvoient une 404 au chargement direct).
4. Domaine personnalisé : `neden.fr` (Cloudflare Pages → Custom domains).

## app.neden.fr

Voir `worker/` — un Cloudflare Worker qui relaie `app.neden.fr` vers l'URL
`/exec` de l'application NEDEN (Google Apps Script ne peut pas servir un
domaine personnalisé directement). Déploiement détaillé en commentaire
dans `worker/app-proxy.js`.

Ce Worker sert aussi `/manifest.json` et `/sw.js` (PWA — NEDEN devient
installable une fois accédé via `app.neden.fr` : "Ajouter à l'écran
d'accueil" sur mobile, "Installer" sur desktop Chrome/Edge). Le service
worker ne rend l'app installable et affiche un message hors-ligne clair —
il ne tente jamais de faire fonctionner NEDEN sans connexion, l'app dépend
de données live (`google.script.run`).

## État du contenu (2026-09-04)

La majorité du contenu biographique/professionnel (profil, compétences,
expériences, formations, logos clients, réalisations, outils, passions,
chiffres clés, historique NEDEN) est **en attente des sources réelles**
que Sébastien doit fournir — voir les sections marquées dans
`src/pages/Home.tsx` et le détail dans `specs/001-site-portfolio/spec.md`
(section Assumptions). Rien n'est publié sans source réelle
(constitution, Principe I).
