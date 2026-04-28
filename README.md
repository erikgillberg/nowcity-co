# nowcity.co

The Now City Inc. corporate parent site. Astro + Tailwind + Preact, deploys to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Pushes to `main` auto-deploy via Cloudflare Pages.

## Structure

- `src/pages/` — top-level routes
- `src/layouts/Layout.astro` — base layout (header, footer, meta)
- `src/components/Wordmark.astro` — official wordmark, inlined SVG
- `src/styles/global.css` — Tailwind base + brand component classes
- `src/assets/brand/` — renderings and brand imagery
- `src/assets/team/` — team headshots
- `public/favicon.svg` — `+` mark from the wordmark
- `tailwind.config.mjs` — brand color tokens and font stacks

See `CLAUDE.md` for site-specific voice and brand rules.
