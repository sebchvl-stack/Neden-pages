# Pistes logo NEDEN — handoff IA créative

**Objectif :** wordmark + favicon 120×120 (PNG final pour OAuth).  
**Existant :** `public/brand/logo.svg`, `favicon.svg` (bases, pas figées).

## Contraintes non négociables
- Nom **NEDEN** (palindrome) — lisible en petit
- Moderne, subtil, startup — pas cartoon, pas 3D chrome, pas neon
- Carré 120×120 favicon · ≤1 Mo PNG/JPG/BMP pour consent OAuth
- Vert uniquement en accent (1–2 px path ou underline)

## Tracks exploitables

### Track 1 — Wordmark pur
Satoshi/Inter Black, tracking `-0.02em` à `0.12em`, blanc sur noir.  
*Prompt :* `Minimal geometric wordmark NEDEN all caps tight tracking white on #050505 flat vector`

### Track 2 — D miroir / cœur subtil
Le **D** central avec cutout intérieur en forme de cœur très abstrait ou symétrie miroir (pourquoi / sens). Quasi invisible à 16px.  
*Prompt :* `NEDEN wordmark, letter D with subtle negative-space heart cutout, refined, not cute`

### Track 3 — Monogramme N + path
N bold géométrique, stroke accent gradient `#2D6A4F` → `#22D3EE` sous ou en diagonal.  
*Déjà amorcé dans* `favicon.svg`  
*Prompt :* `App icon squircle #0B1120, bold white N, thin green-to-cyan underline, 120px`

### Track 4 — Path-as-N
Le path Clearpath forme un N stylisé (deux verticales + diagonale stroke).  
*Prompt :* `Abstract N logo made of single continuous path stroke gradient forest green to cyan on navy squircle`

### Track 5 — Palindrome construct
Lettres qui se lisent identiques miroir vertical ; exploration symétrie.  
*Prompt :* `Typographic experiment NEDEN ambigram or vertical mirror symmetry, minimal, black white`

## Variantes de couleur
| Surface | Wordmark | Icon bg |
|---------|----------|--------|
| Site dark | blanc | — |
| App | blanc | `#0B1120` |
| Print | noir | blanc |
| Orange rare | accent E central | hero only |

## Livrables attendus d’une IA suivante
1. 3–5 SVG wordmark finals
2. 3 icon 120 SVG + export PNG 120 et 512
3. Règles clear space (marge ≥ 0.25× hauteur)
4. Interdit d’usage (stretch, recolor hors palette)

## Fichiers à ne pas écraser sans versionner
`public/brand/*` — ajouter `logo-v2.svg` plutôt que delete silencieux.
