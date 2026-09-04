# Pont CV : memory → template → PDF

## Pipeline

```text
memory/* + PROFILE.json
        →  cv-template/cv.html (data-block="CV/…")
        →  NEDEN app A11 / document-engine (GAS)
        →  PDF (Drive HTML→Doc→PDF)
```

## data-block map

| data-block | memory |
|------------|--------|
| CV/Nom | PROFILE.json name |
| CV/Titre | TITRES_POSTE / offre |
| CV/Keywords | MOTS_CLES |
| CV/Contact | PROFILE contact |
| CV/KPI | CHIFFRES_CLES |
| CV/Profil | COMPETENCES synthèse + POSITIONNEMENT |
| CV/Experience | MISSIONS_XYZ |
| CV/Skills | COMPETENCES |
| CV/Tools | OUTILS |
| CV/Formation | CERTIFICATIONS |

## Règle
Adapter titre + keywords + 3–5 XYZ à l’offre ; jamais inventer d’expérience.

## Fichiers
- Pages : `cv-template/`
- App : feature `001-cv-generator` + `document-engine/`
