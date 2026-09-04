/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neden: {
          bg: 'var(--neden-bg)',
          elevated: 'var(--neden-bg-elevated)',
          surface: 'var(--neden-surface)',
          'surface-hover': 'var(--neden-surface-hover)',
          glass: 'var(--neden-glass)',
          border: 'var(--neden-border)',
          'border-strong': 'var(--neden-border-strong)',
          text: 'var(--neden-text)',
          muted: 'var(--neden-text-muted)',
          subtle: 'var(--neden-text-subtle)',
          orange: 'var(--neden-orange)',
          'orange-hover': 'var(--neden-orange-hover)',
          'orange-soft': 'var(--neden-orange-soft)',
          cyan: 'var(--neden-cyan)',
          'cyan-soft': 'var(--neden-cyan-soft)',
          indigo: 'var(--neden-indigo)',
          violet: 'var(--neden-violet)',
          green: 'var(--neden-green)',
          'green-mid': 'var(--neden-green-mid)',
          'green-light': 'var(--neden-green-light)',
          'green-mist': 'var(--neden-green-mist)',
          'green-soft': 'var(--neden-green-soft)',
          success: 'var(--neden-success)',
          warning: 'var(--neden-warning)',
          danger: 'var(--neden-danger)',
          /* App surface aliases */
          app: '#0B1120',
          'app-card': '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        neden: 'var(--radius-md)',
        'neden-lg': 'var(--radius-lg)',
        'neden-xl': 'var(--radius-xl)',
        'neden-2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'glow-orange': 'var(--glow-orange)',
        'glow-green': 'var(--glow-green)',
        'glow-cyan': 'var(--glow-cyan)',
      },
      transitionTimingFunction: {
        neden: 'var(--ease-out)',
      },
      transitionDuration: {
        neden: 'var(--duration)',
        'neden-fast': 'var(--duration-fast)',
        'neden-slow': 'var(--duration-slow)',
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
  // Keep existing global.css / micro.css class names working;
  // Tailwind utilities are additive.
  corePlugins: {
    preflight: false,
  },
}
