# Data Model: Design System entities

## DesignToken
- id: string (e.g. neden-orange)
- value: string (hex or css)
- surface: site | app | shared
- role: bg | text | accent | border | motion

## MockupFrame
- id: string
- name: string
- surface: site | app | cv
- breakpoint: desktop | tablet | mobile
- figmaNodeId: string?

## CvBlock
- id: CV/Titre | CV/Profil | CV/KPI | CV/Experience | CV/Skills | CV/Tools | CV/Keywords | CV/Formation
- memorySource: path to memory/*
- editable: true

## MotionPattern
- id: path-scroll | hero-reveal | icon-breathe | card-cascade | hover-glow
- inspiration: Clearpath | MarketingLab | Strand | Sensoria
- cssOrLib: framer-motion | css-keyframes
