/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {

        /* =========================
           PRIMARY — Bleu institutionnel
           (plus sobre / administratif)
        ========================= */
        primary: {
          50:  '#f5f8ff',
          100: '#e6edff',
          200: '#c7d6ff',
          300: '#9fb8ff',
          400: '#6f95f5',
          500: '#4f77e0',
          600: '#2f5dc6', // principal CTA
          700: '#244aa3',
          800: '#1b3a82', // navbar/header
          900: '#132b63',
          950: '#0c1b3f',
        },

        /* =========================
           NEUTRAL — Gris UI (IMPORTANT)
           pour textes, fonds, bordures
        ========================= */
        neutral: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        /* =========================
           États système
        ========================= */
        success: {
          light: '#bbf7d0',
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },

        warning: {
          light: '#fde68a',
          DEFAULT: '#d97706',
          dark: '#b45309',
        },

        error: {
          light: '#fecaca',
          DEFAULT: '#dc2626',
          dark: '#991b1b',
        },

        /* =========================
           Accent — Or institutionnel
        ========================= */
        accent: {
          light: '#fef3c7',
          DEFAULT: '#d4af37',
          dark: '#a88410',
        },
      }
    }
  },

  plugins: []
}
