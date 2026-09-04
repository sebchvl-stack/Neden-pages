# Micro-interactions CSS — catalogue NEDEN

Fichier : `src/styles/micro.css` (importé dans `main.tsx`)

| # | Élément | Technique | Sensation |
|---|---------|-----------|-----------|
| 1 | `.btn-primary` | Shine `::after` skew + glow orange + active scale | CTA vivant type startup |
| 2 | `.btn-ghost` | Ring box-shadow orange soft | Secondaire précis |
| 3 | Nav links | Underline `scaleX` gradient vert→cyan | Clearpath dans la nav |
| 4 | `.logo` | Letter-spacing expand | Marque qui respire |
| 5 | `.card` | Radial sheen + lift + stagger delay | Spector / Trova |
| 6 | `.kpis` | Hairline cyan scaleX + strong color | Data highlight |
| 7 | `.icon-chip` | Pause breathe + solidify green | Strand hover |
| 8 | `.feature-pills` | Scale 1.05 + glow | Soft feedback |
| 9 | `.path` | pathGrow + pathPulse brightness | Énergie continue |
| 10 | `.reveal` | `animation-timeline: view()` ou fallback | Sensoria cascade |
| 11 | `:focus-visible` | Ring cyan / orange | A11y |
| 12 | `::selection` | Orange wash | Cohérence marque |

## Principes
- Transform + opacity (+ filter léger sur path)
- Pas de layout thrashing
- `prefers-reduced-motion: reduce` coupe animations et transforms hover

## Pistes ouvertes (JS optionnel)
- Magnetic button (pointer offset)
- True mouse-follow spotlight sur cards
- Scroll-scrub path via Framer `useScroll`

Ne pas tout activer en même temps sur une page dense.
