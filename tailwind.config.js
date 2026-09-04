/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette provisoire, reprise du style déjà approuvé par Sébastien
        // sur les pages OAuth (docs/GUIDE_PAGES_OAUTH_PUBLIQUES.md, dépôt
        // Neden-application) — À REMPLACER par la charte graphique
        // définitive dès qu'elle est fournie (voir constitution, Principe
        // VI : le rendu final ne doit pas rester sur cette base neutre).
        bg: '#0B1120',
        surface: '#111827',
        card: '#1E293B',
        edge: 'rgba(255,255,255,.08)',
        primary: '#6366F1',
        secondary: '#22D3EE',
        ink: '#F8FAFC',
        dim: '#94A3B8'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
