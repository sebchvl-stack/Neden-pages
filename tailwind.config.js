/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette reprise du maquettage Figma NOLZUnUcR2iFPiu0bAzZjz, page
        // "11- Site internet (temporaire)" (design context du 13/09/2026) —
        // remplace la palette provisoire précédente, qui restait sur la base
        // neutre des pages OAuth déjà approuvées faute de charte définitive
        // (constitution, Principe VI : ne pas rester sur du neutre quand une
        // charte réelle existe).
        bg: '#0d1322',
        surface: '#080e1d',
        card: '#151b2b',
        cardAlt: '#191f2f',
        edge: '#242a3a',
        edgeLight: '#2f3445',
        primary: '#c0c1ff',
        primaryInk: '#1000a9',
        secondary: '#5de6ff',
        danger: '#ffb4ab',
        ink: '#dde2f8',
        dim: '#c7c4d7'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
