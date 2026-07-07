/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Now City editorial palette (System B) — the shared brand foundation.
        // Source of truth: the West Salem site and nowcity.ai brand.css
        // (cream/ink/terra/green + Libre Baskerville/Inter). Do NOT reintroduce
        // the old forest/stone corporate palette or Playfair/Fraunces display fonts.
        forest: {
          DEFAULT: '#46583d',
          50: '#f0f2ec',
          100: '#dde3d4',
          200: '#c2ccb2',
          300: '#a3b18d',
          400: '#82936c',
          500: '#5d7050',
          600: '#3a4a32',
          700: '#46583d', // brand primary
          800: '#1c1a17',
          900: '#141210',
        },
        stone: {
          DEFAULT: '#857f73',
          100: '#eae5da',
          200: '#ddd6c8',
          300: '#c5beae',
          400: '#a39d8f',
          500: '#857f73', // brand secondary
          600: '#6b665c',
          700: '#4f4a42',
          800: '#33302a',
          900: '#1c1a17',
        },
        cream: {
          DEFAULT: '#f4f1e9',
          50: '#fbf9f4',
          100: '#f4f1e9', // brand canvas
          200: '#ece8dc',
          300: '#ddd4bd',
        },
        copper: {
          DEFAULT: '#a8703f',
          50: '#f7efe3',
          100: '#eed9bd',
          200: '#dcb183',
          300: '#c28f5c',
          400: '#a8703f', // accent
          500: '#8c5a31',
          600: '#6d4526',
        },
        sage: {
          DEFAULT: '#cfc8b8',
          50: '#f4f1e9',
          100: '#e5dfd2',
          200: '#cfc8b8',
          300: '#cfc8b8', // accent
          400: '#b7b0a3',
          500: '#8f897c',
        },
        // Now City Inc. wordmark colors — used ONLY for the wordmark itself
        // and never for body type or UI. Forest is still the primary headline color.
        sky: {
          DEFAULT: '#7fb5d6',
          soft: '#c8dfea',
          deep: '#33597a',
          ink: '#274a68',
        },
        teal: {
          DEFAULT: '#2e8a96',
          deep: '#226872',
        },
        sun: {
          DEFAULT: '#e9b45c',
          deep: '#dfa53f',
        },
        coral: {
          DEFAULT: '#d97e5a',
        },
        wordmark: {
          green: '#5A847E',
          mint: '#83C5BE',
        },
      },
      fontFamily: {
        // Display: Libre Baskerville, the ecosystem serif (matches West Salem + nowcity.ai)
        display: [
          'Libre Baskerville',
          'Georgia',
          'serif',
        ],
        // Body: Inter per Brand Bible
        sans: [
          'Inter',
          'Helvetica Neue',
          'Source Sans Pro',
          'system-ui',
          'sans-serif',
        ],
        // Eyebrows/labels: Inter (Outfit remains only inside the wordmark SVG)
        brand: [
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        // Display sizes tuned for editorial feel
        'display-xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
};
