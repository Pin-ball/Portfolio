# Portfolio

Site personnel de Damien Herrero : profil, projets, expériences, compétences et formation, en français et en anglais.

## Démarrer

```bash
nvm use
npm i
npm run dev
```

## Scripts

| Script              | Rôle                                        |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Serveur de développement Next.js            |
| `npm run build`     | Build de production (pages fr/en statiques) |
| `npm run start`     | Sert le build de production                 |
| `npm run typecheck` | Génère les types de routes puis typecheck   |
| `npm run check`     | Biome (lint + format) et typecheck          |
| `npm run format`    | Applique les corrections Biome              |

## Stack

Next.js (App Router, React Compiler), React, TypeScript (strict), next-intl, Tailwind CSS, Radix, Biome, Lucide.

## Contenu

- Données (projets, expériences, compétences, formation) : `src/data/portfolio.ts`, chaque entrée identifiée par un `id`.
- Textes : `messages/fr.json` (source, qui type les clés) et `messages/en.json`, rangés sous ce même `id`.
