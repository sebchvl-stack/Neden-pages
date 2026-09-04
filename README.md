# NEDEN Pages — neden.fr

Site public **React + Vite + React Router + Tailwind** → Cloudflare Pages.

## ⚡ Reprise rapide

1. Lire **[STATUS.md](./STATUS.md)** (état + backlog + interdits)
2. Branche : **`002-design-system`**
3. `npm install && npm run dev`
4. Handoff IA : `memory/AI_HANDOFF.md` · `prompts/NEXT_AI_DESIGN.md`

## Stack

- React 18 + Vite 5 + React Router 6
- Design tokens : `src/styles/tokens.css`
- Tailwind 3 (preflight off) → `tailwind.config.js`
- Micro-interactions : `src/styles/micro.css`
- Fonts : Satoshi (display) + Inter

## Routes

| Path | Page |
|------|------|
| `/` | One-page profil + NEDEN + studio |
| `/moodboard` | Tokens & composants |
| `/privacy` | Confidentialité (OAuth) |
| `/cgu` | CGU |

## Cloudflare SPA

`public/_redirects` : `/* /index.html 200`

## Design

- Site : noir `#050505`, CTA orange, vert **soutien**
- App (autre repo) : navy + indigo — ne pas cloner
- Docs : `docs/TOKENS.md`, `MOODBOARD.md`, `LOGO_TRACKS.md`, `ARCHITECTURE.md`

## Figma

https://www.figma.com/design/NOLZUnUcR2iFPiu0bAzZjz

## OAuth checklist

- [x] Homepage publique sans login
- [x] Objectif app expliqué
- [x] Nom NEDEN cohérent
- [x] Privacy détaillée
- [ ] PNG favicon 120 OAuth
- [ ] Vérifier domaine neden.fr côté provider
- [ ] Deploy prod sous GO

## Mémoires profil / CV

`memory/*` · template `cv-template/` · pont `docs/CV_EDITOR_BRIDGE.md`
