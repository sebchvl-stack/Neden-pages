# DS-N02 — AI Result

**Status :** DESIGNED  
**Used by :** A03 candidature (fit, questions) · A10 JARVIS structured cards · CV pipeline messages

## Anatomy
```
┌─────────────────────────────────────┐
│ Label (ex. Analyse fit)    meta AI  │
├─────────────────────────────────────┤
│ Body markdown / plain               │
│ · bullets allowed                   │
├─────────────────────────────────────┤
│ [Copy] [Insert] [Regenerate]        │
└─────────────────────────────────────┘
```

## Rules
1. **No invented profile facts** — scores/metrics only if returned by API / Gemini schema
2. Meta line optional : model name + time (11px muted mono)
3. Loading : skeleton inside same card frame
4. Error : danger text + retry
5. Long content : max-height 240px scroll inside card

## Actions
| Action | Behavior |
|--------|----------|
| Copy | clipboard plain text |
| Insert | push into notes / field (context) |
| Regenerate | re-call endpoint with confirm if paid/quota |

## Visual
- Card surface · radius lg · border subtle
- Left accent 3px cyan optional for « AI » affordance
- Not branded as ARWEN / Video / Brainstorm unless result originates from that module
