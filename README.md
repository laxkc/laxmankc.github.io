# laxmankc.dev

Personal portfolio — Astro 6, Tailwind CSS v4, TypeScript. Deployed to GitHub Pages.

Live: https://laxkc.github.io/laxmankc.github.io/

## Stack

- **Astro 6** — static site framework
- **Tailwind CSS v4** — styling, design tokens via `@theme` in `src/styles/global.css`
- **TypeScript** — typed components, content collections (Zod), data modules
- **Motion** (vanilla, not React) — scroll-driven and stagger animations
- **astro-icon + @iconify-json/simple-icons** — brand icons in the Tech Stack section
- **@lucide/astro** — UI icons (download, menu, dot, etc.)
- **Manrope** — typography, self-hosted via Astro Fonts API
- **@astrojs/sitemap** — auto-generated sitemap

## Project structure

```
src/
├── assets/                  Logo, processed by Astro Image
├── components/
│   ├── cards/               WorkCard, EducationCard, AwardCard
│   ├── layout/              Container, Section, Navbar, Footer
│   ├── sections/            Hero, SelectedWork, EngineeringThinking,
│   │                        Experience, TechStack, EducationRecognition
│   └── ui/                  Button, Tag, SocialLink
├── content/
│   ├── work/                Project case studies (Markdown)
│   └── posts/               Essays (Markdown — currently unused on home page)
├── content.config.ts        Content collection schemas (Zod)
├── data/                    Static data
│   ├── nav.ts               navLinks, spySections, socials
│   ├── experience.ts        Roles
│   ├── stack.ts             6 categories × items with brand-icon names + colors
│   ├── education.ts         Postgrad cert + diploma
│   └── awards.ts            Hackathon placements
├── layouts/Layout.astro     Page shell — head, fonts, favicons, manifest, OG meta
├── pages/
│   ├── index.astro          Homepage assembly
│   └── 404.astro            Friendly 404
├── scripts/
│   └── reveal.ts            Shared scroll-reveal helper (motion + IntersectionObserver)
└── styles/global.css        Design tokens + base layer + reveal hidden states
```

## Page sections (top to bottom)

| # | Section | Background | Component |
|---|---|---|---|
| 1 | Hero | `bg-ink` (black) | `Hero.astro` — word-stagger headline, two CTAs |
| 2 | Selected Work | `bg-bg` (white) | `SelectedWork.astro` — 2×2 cards from `content/work/` |
| 3 | Engineering Thinking | `bg-ink` (black) | `EngineeringThinking.astro` — 4 principles, horizontal slide reveal |
| 4 | Experience | `bg-bg` (white) | `Experience.astro` — timeline with scroll-driven rail |
| 5 | Tech Stack | `bg-primary` (purple) | `TechStack.astro` — 6 cards, brand icons via simple-icons |
| 6 | Education & Recognition | `bg-bg` (white) | `EducationRecognition.astro` — 2×2 grid + callout |
| – | Footer | `bg-ink` (black) | `Footer.astro` — logo, socials, "Built with Astro" |

## Motion system

A deliberately small vocabulary, applied consistently across all sections.

**Tokens** (defined in `src/scripts/reveal.ts` and matching CSS):

```
duration (reveals)         500ms
duration (interactions)    250ms
stagger between siblings   80ms
easing                     cubic-bezier(0.22, 1, 0.36, 1)
```

**Three animation types — and only these:**

- **Fade + translate** — section reveals on scroll. Direction defaults to `y` (up). Engineering Thinking uses `x` (slide in from left). Education uses `fade` (no translate, supporting content).
- **Scale** — hover and press only. Buttons `1.02`, cards `-translate-y-1.5`, icons `1.10`. Never on entrance.
- **Stagger** — child reveal in groups marked `data-reveal-group`.

Honors `prefers-reduced-motion` everywhere — both the JS guards in section scripts and the CSS rules for initial hidden states are wrapped in the appropriate media queries.

**Special pieces:**
- Hero — per-word stagger of the headline + paced reveal of sub-paragraph and CTAs
- Experience — timeline rail's `scaleY` is bound to scroll progress through the section (motion's `scroll()` API); markers scale 0→1 on enter
- Navbar — thin scroll-progress bar at the top edge of the navbar tracks document scroll depth

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) runs on every push to `main`:

1. `npm ci`
2. `npx astro check` — type-check before build (catches TS errors that hot reload misses)
3. `npm run build` — Astro detects `NODE_ENV=production` and applies the `/laxmankc.github.io/` base path
4. Upload `dist/` as the Pages artifact
5. Deploy

The `base` path is **conditional** in `astro.config.mjs`: `/` in dev, `/laxmankc.github.io/` in build/preview/production. All hardcoded asset paths use `import.meta.env.BASE_URL` so they adapt automatically.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321/` (base = `/`) |
| `npm run build` | Production build to `./dist/` (base = `/laxmankc.github.io/`) |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Type-check Astro + TS files |

## Editing content

- **Projects** → add a Markdown file to `src/content/work/`. Frontmatter validated by `content.config.ts`.
- **Experience / stack / education / awards** → edit the typed arrays in `src/data/`.
- **Resume PDF** → replace `public/laxman_kc_cv.pdf`.
- **Hero image** → replace `public/hero-section.png`.
- **Project covers** → drop in `public/works/<name>.png` and reference as `/works/<name>.png` in the work entry's `cover:` field.
- **Favicons / PWA icons** → already in `public/` (16, 32, 180, 192, 512 PNGs + `site.webmanifest`).
- **Social-share preview** → replace `public/laxman_kc.png` (referenced by the OG/Twitter meta in `Layout.astro`).
- **Nav links / scroll-spy targets** → `src/data/nav.ts`. `navLinks` is what shows in the navbar; `spySections` is what the scroll-spy tracks (includes `education` even though it's not a visible nav link).
