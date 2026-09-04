# Système CV NEDEN — Figma + App + HTML/CSS + PDF

## Objectif
CV adaptés à chaque offre à partir des mémoires `memory/*` :
1. Maquettes Figma (blocs éditables)
2. Page édition dans NEDEN
3. Rendu HTML/CSS aligné design system
4. Export PDF

## Sources
TITRES_POSTE → CHIFFRES_CLES → MOTS_CLES + offre → MISSIONS_XYZ → COMPETENCES → OUTILS → CERTIFICATIONS

## Architecture
```
[Mémoires] → [NEDEN Édition CV] ↔ [Figma template]
                ↓
         [HTML/CSS tokens]
                ↓
            [PDF export]
```

### Figma
Blocs : CV/Titre, CV/Profil, CV/KPI, CV/Experience, CV/Skills, CV/Tools, CV/Formation

### NEDEN
Brancher CVGenerator.gs sur les mémoires · preview HTML · export PDF

### Processus
1. Coller offre 2. Matcher mots-clés/titre 3. Sélection XYZ 4. Ajustement 5. Preview 6. PDF 7. Archive candidature

## Hors scope jusqu’au GO
Refonte écrans app, animations site, prod neden.fr — **seulement après GO explicite**
