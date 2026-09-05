# DS-C06 — Tables / Lists

**Status :** DESIGNED  
**Used by :** A02 candidatures · A04 tâches · A06 docs · A07/A08

## List row (default app)
```
┌──────────────────────────────────────────┐
│ [leading]  Title                    meta │
│            Subtitle · muted              │
│                              [trailing]  │
└──────────────────────────────────────────┘
```
- Min height **48–56px** mobile · **52px** desktop
- Padding X 16 · gap 12
- Divider : 1px `border` white/8% full bleed or inset 16
- Title : 14–15px text primary · subtitle 12–13px muted
- Active/press : surface-hover bg
- Swipe actions : optional later (not required v1)

## Leading / trailing
| Slot | Examples |
|------|----------|
| Leading | checkbox, icon file type, avatar initial |
| Trailing | status pill, chevron, date |

## Table (desktop optional)
- Header row 12px uppercase muted tracking wide
- Sticky header optional on long lists
- Column align : text left · numbers right · dates right
- No zebra required ; hover row surface-hover

## Group headers
- Sticky small label (Aujourd’hui / P1) green-light or muted uppercase
- Spacing above group 16–24

## Empty / loading
- Empty : centered muted + CTA (C02)
- Loading : 3 skeleton rows opacity pulse (respect reduced-motion → static grey)

## A11y
- Row focusable if clickable (`button` or `a` or `tabIndex=0`)
- Checkbox has accessible name
