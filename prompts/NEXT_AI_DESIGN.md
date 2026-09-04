# Prompt bootstrap — prochaine IA design NEDEN

Tu travailles sur **sebchvl-stack/Neden-pages** branche **`002-design-system`**.

## Lire d’abord
1. docs/TOKENS.md
2. docs/MOODBOARD.md
3. docs/LOGO_TRACKS.md
4. docs/WIREFRAMES_FULL.md
5. docs/CREATIVE_DIRECTIONS.md
6. docs/SITE_VS_APP.md
7. memory/AI_HANDOFF.md

## Stack
- React + Vite + React Router
- **Tailwind 3** mappé sur CSS variables `tokens.css` (preflight **off**)
- Classes legacy global.css + micro.css toujours valides
- Utilitaires : `bg-neden-orange`, composants `@layer` : `tw-btn-primary`, `tw-card`…

## Mission possible
- Affiner logo (tracks 1–5) → SVG + PNG 120
- Maquettes Figma depuis WIREFRAMES_FULL
- Migrer progressivement Home vers classes Tailwind sans casser micro-interactions
- Framer Motion path scroll

## Interdits
- Vert dominant full-section
- Cloner site dans l’app (ou inverse)
- Inventer faits CV (memory/* only)
- Deploy prod sans GO utilisateur
- Activer preflight Tailwind sans audit

## Moodboard live
Route `/moodboard`
