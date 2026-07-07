# nowcity.co — site-specific rules

This site is the **Now City Inc. corporate parent**. It is NOT the
neighborhood brand (nowcity.life). As of July 2026 it ALSO hosts the
**Now City Labs services offering** (nowcitylabs.com was retired and
301-redirects here). Audiences here: investors, civic partners,
journalists, recruits, landowners/operators looking for dev services,
anyone Googling the company.

Read the ecosystem-level rules in `../CLAUDE.md` before this file.


## Brand system (System B — the editorial system) — DO NOT REGRESS

As of July 2026 this site runs the shared Now City editorial system,
the same foundation as the West Salem district site and nowcity.ai:

- **Type:** Libre Baskerville (display serif) + Inter (body/labels).
  Outfit appears ONLY inside the wordmark SVG. Never reintroduce
  Playfair Display, Fraunces, or Canela.
- **Palette:** cream #f4f1e9 canvas, warm ink #1c1a17/#33302a text,
  terra #a8703f accent (the `copper` scale), green #46583d for primary
  buttons (the `forest` scale). Dark bands use ink-deep, not cold green.
  The Tailwind token NAMES (forest/stone/cream/copper/sage) are legacy;
  their VALUES are the editorial palette. Do not restore the old
  forest #1F3A34 / stone-gray values.
- **Photography over decoration:** real places (the Willamette, the
  districts) over concept renders, abstract glyphs, or decorative "+"
  marks. If a section feels like a generic SaaS layout, it is wrong.
- **Register:** most restrained voice in the ecosystem. Patient,
  ambitious, grounded. "Building for the long now."
- **Ecosystem:** nowcity.co = corporate parent + services arm;
  nowcity.life = neighborhoods (warm register, same system);
  nowcity.ai = software products; west-salem (in public/) = the
  Edgewater project site. Differentiate by register and photography,
  never by a different type or color system.
- **Urban Reboot no longer exists anywhere in the ecosystem.** Do not
  reference it. Early-stage civic/feasibility work = the services arm;
  software = NowCity.ai.

## Services section (folded-in Now City Labs)

- One top-level **Services** nav item (dropdown) with three children:
  **The Stack** (`/stack`), **How We Work** (`/services`), and
  **Outcomes** (`/outcomes`, the interactive comparison island).
- B2B-facing but written in nowcity.co's corporate voice, not the old
  Labs voice. Refer to the arm as "Now City" or "our services arm,"
  not heavily as a separate "Now City Labs" brand.
- The homepage hero leads with the positioning: **unlock hidden value
  through adaptive reuse + ground-up construction to create walkable,
  green, mixed-use districts.** Keep that thread consistent.
- Gateway-call / contact CTAs route to `/contact`. Note: `/contact`
  still lists `team@nowcitylabs.com` (a working mailbox); swap to a
  nowcity.co address once one exists.

## Voice

- Patient, ambitious, grounded. "Building for the long now."
- More restrained than nowcity.life (hospitality register).
- More declarative than nowcitylabs.com (B2B rigor).
- Use "urbanism" actively. Planners, AICP, CNU folks are part of the
  audience. The word does real work for them.
- No em-dashes, no en-dashes (ecosystem-wide rule).
- Periods over dashes. Sentence fragments are OK when they earn it.

## Brand assets

- **Wordmark** lives at `src/components/Wordmark.astro` (inlined SVG).
  Never recolor it. Wordmark colors are `#5A847E` and `#83C5BE` and
  exist in their own canonical palette, distinct from the Brand Bible
  Forest/Sage. Use Brand Bible Forest for headlines and UI; use the
  wordmark for the wordmark.
- **Outfit** is loaded as a brand font (`font-brand`). Used for the
  wordmark text and for short brand labels (eyebrows, "For residents"
  labels on cards). Body stays on Inter; headlines stay on Canela /
  Playfair Display.
- **Favicon** is the `+` mark from the wordmark, extracted into
  `public/favicon.svg`. Wordmark green tile, cream `+` inside.

## Imagery

- Renderings (Ritchie hero render, building-block diagram) and the
  tilt-shift series live in `src/assets/brand/`.
- Team headshots live in `src/assets/team/`.
- The deck imagery used on nowcity.life is NOT reused here. nowcity.co
  has its own visual signature: bigger-scale renderings + the
  tilt-shift series for distinct aerial/system views.

## Page-level rules

- **Home** — corporate identity, three brands, the Stack, stage signal,
  three-path soft CTA.
- **Approach** — urbanism + systems depth. Audience: planners, civic,
  urbanists. Keep all 10 design guidelines visible (no accordion). Do
  not strip the depth; that is the differentiator.
- **Investment** — testing-the-waters posture only. NEVER frame as
  active solicitation. Brianna's exact disclaimer language from
  `nowcity-co-current.md` goes verbatim on the interest form. SEC
  language matters here; flag any new copy on this page for legal
  review before publishing.
- **Tokenization** — frame as forward-looking infrastructure intent,
  never as available product. "We develop with this future in mind"
  not "we offer tokenized ownership."
- **Geography** — "California and the Pacific Northwest" or "West
  Coast" only. Do NOT name specific cities (e.g., Salem) on this site.
  Pipeline disclosure stays at the regional level.

## Stack

Same as the other two sites: Astro 4 + Tailwind 3 + Preact, deploys
to Cloudflare Pages on push to main, Cloudflare DNS.

Repo: `github.com/erikgillberg/nowcity-co` (planned).
