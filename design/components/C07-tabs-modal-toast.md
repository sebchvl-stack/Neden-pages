# DS-C07 — Tabs / Modal / Toast

**Status :** DESIGNED

## Tabs
### Underline (app default)
- Height 44 touch
- Active : text indigo + 2px underline indigo
- Inactive : muted · hover text
- Scroll horizontal on mobile if overflow

### Segmented (optional filters)
- Pill container surface · active fill indigo soft

## Modal
```
Overlay 80% #0B1120
┌─────────────────────────┐
│ Title            [x]    │
│ Body                    │
│         [Cancel] [OK]   │
└─────────────────────────┘
```
- Panel max-width 420–520 · radius xl · border subtle · shadow-md
- Focus trap · Esc close · return focus to opener
- Primary action indigo (app) · destructive danger

## Sheet (mobile)
- Bottom sheet alternative to modal · drag handle optional

## Toast
- Position bottom center (mobile) / bottom-right (desktop)
- Auto-dismiss 4–6s · swipe dismiss optional
- Variants : default surface · success green-light border · error danger · info cyan
- Max width 360 · radius lg · one line + optional action

## Reduced motion
- Modal : opacity only, no slide
- Toast : no slide-up
