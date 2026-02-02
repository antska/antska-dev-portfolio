# antska.dev — Personal Portfolio

A fast, accessible developer portfolio built with **Astro**, **TypeScript**, and **Tailwind CSS**. Content is managed via **Astro Content Collections** (Markdown + JSON); no CMS required.

## Features

- **Fast** — Static HTML, minimal JS, Astro View Transitions for smooth navigation
- **Prefetch + cache** — Main nav links prefetched so navigation feels instant after first load
- **Responsive** — Mobile-first layout
- **SEO** — Meta tags, JSON-LD (Person, WebSite, Article), sitemap
- **Accessible** — Semantic HTML, ARIA where needed, keyboard-friendly
- **Dark theme** — High-contrast dark color scheme
- **Content Collections** — Blog, projects, experience, skills, and about content in `src/content/`

## Tech stack

- **[Astro](https://astro.build/)** — Static site generator, View Transitions
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** — Styling
- **[Vite](https://vitejs.dev/)** — Build tool (via Astro)

## Project structure

```
antska-dev-portfolio/
├── public/                 # Static assets (favicon, OG images, robots.txt)
├── src/
│   ├── components/          # Astro components (Header, Footer, Hero, etc.)
│   ├── content/            # Content Collections
│   │   ├── about/          # About page data (JSON)
│   │   ├── blog/           # Blog posts (Markdown)
│   │   ├── experience/     # Experience entries (Markdown)
│   │   ├── projects/       # Projects (Markdown)
│   │   └── skills/         # Skills (Markdown)
│   ├── layouts/            # Layout.astro
│   ├── lib/                # constants.ts, keywords.ts
│   ├── pages/              # Routes (index, about, projects, blog, contact, 404)
│   └── styles/             # Global CSS (e.g. hero-animations.css)
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml            # Netlify build + headers
├── vercel.json             # Vercel headers (optional)
└── package.json
```

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install and run

1. **Clone and install**

   ```bash
   git clone https://github.com/antska/antska-dev-portfolio.git
   cd antska-dev-portfolio
   npm install
   ```

2. **Start dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321).

No environment variables are required for local development. Optional env vars can be added via `.env` (see `.env.example`).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Astro dev server   |
| `npm run start`   | Dev server with `--host` |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |

## Customization

- **Hero** — `src/lib/constants.ts` (e.g. `HERO_TITLE`, `HERO_DESCRIPTION`, `HERO_CTA`, `VALUES`)
- **About** — `src/content/about/about.json` and/or defaults in `constants.ts`
- **Projects** — Add or edit Markdown files in `src/content/projects/`
- **Blog** — Add or edit Markdown in `src/content/blog/`
- **Experience** — `src/content/experience/*.md`
- **Skills** — `src/content/skills/*.md`
- **Styling** — `tailwind.config.mjs` and `src/styles/`

## Deployment

### Netlify

1. Connect the repo to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Optional: set `NODE_VERSION=20` in build environment (see `netlify.toml`).

### Vercel

1. Import the repo in [Vercel](https://vercel.com).
2. Framework preset: Astro (or auto-detected).
3. Optional: use `vercel.json` for security and cache headers.

### Manual

```bash
npm run build
```

Deploy the generated `dist/` folder to any static host.

## Author

**Antonis Skandalis**

- Portfolio: [antska.dev](https://antska.dev)
- LinkedIn: [@antskandalis](https://linkedin.com/in/antskandalis)
- GitHub: [@antska](https://github.com/antska)

## License

MIT (see [LICENSE](LICENSE)).

---

Built with [Astro](https://astro.build/)
