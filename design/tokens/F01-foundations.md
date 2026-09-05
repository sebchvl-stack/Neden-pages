# DS-F01 — Foundations

**Status :** DESIGNED  
**Implements :** dual surface + token pipeline

## Principles
1. Site ≠ App ≠ CV print (3 themes)
2. Tokens in CSS variables first → Tailwind map second
3. Green never full-bleed background
4. Motion prefers transform/opacity ; honor `prefers-reduced-motion`
5. Content facts from `memory/*` only

## Theme keys
- `theme-site` (default pages body)
- `theme-app` (documented for Index.html / future)
- `theme-cv` (cv-template)

## Code anchors
- `src/styles/tokens.css`
- `tailwind.config.js` (preflight false)
