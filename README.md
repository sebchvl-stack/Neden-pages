# NEDEN Pages — neden.fr

Site public React + Vite + React Router → **Cloudflare Pages**.

## Branche active

`design/site-foundation` (hors `main`)

## Stack

- React + Vite + React Router (SPA)
- Tokens : `src/styles/tokens.css`
- Fonts : **Satoshi** (display) + **Inter** (body)
- Motion : Framer Motion + path SVG scroll

## Cloudflare SPA

`public/_redirects` :
```
/*    /index.html   200
```

## Routes

| Path | Page |
|------|------|
| `/` | One-page profil + NEDEN |
| `/privacy` | Confidentialité (OAuth) |
| `/cgu` | CGU |

## Design

- Fond noir, CTA **orange**, **vert bouteille en soutien** (path, success, accents)
- Voir `docs/MOTION.md` et `docs/TYPOGRAPHY.md`

## Figma

https://www.figma.com/design/NOLZUnUcR2iFPiu0bAzZjz

## OAuth checklist

- [x] Homepage publique sans login
- [x] Objectif app expliqué (à compléter en hero)
- [x] Nom NEDEN cohérent
- [x] Privacy détaillée
- [ ] Vérifier domaine neden.fr côté provider OAuth
