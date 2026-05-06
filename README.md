# laxmankc.dev

Personal portfolio — built with Astro, Tailwind CSS v4, and TypeScript.

## Stack

- **Astro 6** — static site framework
- **Tailwind CSS v4** — styling, design tokens via `@theme` in `src/styles/global.css`
- **TypeScript** — typed components and content collections
- **Lucide** — icons (`@lucide/astro`)
- **Manrope** — typography, self-hosted via Astro Fonts API

## Project structure

```
src/
├── assets/                  Images processed by Astro Image (logo, etc.)
├── components/
│   ├── cards/               WorkCard, EducationCard, AwardCard
│   ├── layout/              Container, Section, Navbar, Footer
│   ├── sections/            Hero, SelectedWork, EngineeringThinking,
│   │                        Experience, TechStack, EducationRecognition, Contact
│   └── ui/                  Button, Tag, SocialLink
├── content/
│   ├── work/                Project case studies (Markdown)
│   └── posts/               Essays (Markdown)
├── content.config.ts        Content collection schemas (Zod)
├── data/                    Static data (nav, experience, stack, education, awards)
├── layouts/Layout.astro     Page shell — head, fonts, favicons, manifest
├── pages/index.astro        Homepage assembly
└── styles/global.css        Design tokens + base layer
```

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm install`     | Install dependencies            |
| `npm run dev`     | Dev server at `localhost:4321`  |
| `npm run build`   | Build to `./dist/`              |
| `npm run preview` | Preview the production build    |
| `npx astro check` | Type-check Astro + TS files     |

## Editing content

- **Projects** → add a Markdown file to `src/content/work/`
- **Posts** → add a Markdown file to `src/content/posts/`
- **Experience / stack / education / awards** → edit the typed arrays in `src/data/`
- **Resume PDF** → replace `public/laxman_kc_cv.pdf`
- **Hero image** → replace `public/hero-section.png`
- **Favicons / PWA icons** → see `public/` (16, 32, 180, 192, 512 PNGs + `site.webmanifest`)
