# DS-C03 — Forms

**Status :** DESIGNED

## Anatomy
- Label 12–13px muted above field
- Input height 40–44px app · radius md (12)
- Fill `#0B1120` or elevated · border white/10%
- Placeholder subtle
- Focus : ring 2px cyan (site) / indigo (app primary contexts)
- Error : border danger + text 12px below
- Hint : 12px subtle under field

## Types
| Type | Notes |
|------|--------|
| text / email / password | standard |
| textarea | min-height 96px |
| select | native or listbox later |
| checkbox / switch | indigo active app |
| file | audio/* for JARVIS |

## Site
Contact prefers `mailto` + LinkedIn — forms lourds non prioritaires OAuth homepage

## A11y
- label associated `htmlFor`
- error `aria-invalid` + `aria-describedby`
- focus-visible always
