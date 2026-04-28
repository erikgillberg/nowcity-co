# nowcity.co — site-specific rules

This site is the **Now City Inc. corporate parent**. It is NOT the
neighborhood brand (nowcity.life) and NOT the B2B services brand
(nowcitylabs.com). Audiences here: investors, civic partners,
journalists, recruits, anyone Googling the company.

Read the ecosystem-level rules in `../CLAUDE.md` before this file.

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
