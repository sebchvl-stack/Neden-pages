# Exploration — Design tokens NEDEN

Source runtime : `src/styles/tokens.css`  
Bridge Tailwind : `tailwind.config.js` → classes `bg-neden-*`, `text-neden-*`, etc.

## Surfaces

| Token | Hex / value | Site | App |
|-------|-------------|------|-----|
| `--neden-bg` | `#050505` | Page | — |
| app bg | `#0B1120` | — | Dashboard |
| `--neden-surface` | `#141414` | Cards | — |
| app card | `#111827` | — | Cards |

## Brand

| Role | Token | Rule |
|------|-------|------|
| CTA site | orange `#F97316` | Primary actions marketing |
| Primary app | indigo `#6366F1` | Product actions |
| Data / tech | cyan `#22D3EE` | KPI hover, path end, focus |
| Support | green `#1B4D3E` → `#52B788` | Path, success, labels — **never full section bg** |
| Accent rare | violet `#8B5CF6` | Charts only |

## Type

- Display site : Satoshi (`font-display`)
- UI : Inter (`font-sans`)
- Mono : JetBrains / Geist

## Motion tokens

- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`
- fast 150ms · default 280ms · slow 500ms

## Tailwind examples

```html
<button class="tw-btn-primary">Contact</button>
<div class="tw-card">…</div>
<span class="text-neden-green-light">Résultat</span>
<div class="bg-neden-app text-neden-text">App shell</div>
```

## Invariants for other AIs
1. Map new colors into `tokens.css` first, then Tailwind `theme.extend.colors.neden`
2. Do not enable Tailwind preflight without auditing global.css
3. Green = support only
