/** Moodboard vivant — tokens + pistes pour design review */
const swatches = [
  { name: 'bg', hex: '#050505', cls: 'bg-neden-bg' },
  { name: 'surface', hex: '#141414', cls: 'bg-neden-surface' },
  { name: 'orange', hex: '#F97316', cls: 'bg-neden-orange' },
  { name: 'cyan', hex: '#22D3EE', cls: 'bg-neden-cyan' },
  { name: 'indigo', hex: '#6366F1', cls: 'bg-neden-indigo' },
  { name: 'violet', hex: '#8B5CF6', cls: 'bg-neden-violet' },
  { name: 'green', hex: '#1B4D3E', cls: 'bg-neden-green' },
  { name: 'green-mid', hex: '#2D6A4F', cls: 'bg-neden-green-mid' },
  { name: 'green-light', hex: '#52B788', cls: 'bg-neden-green-light' },
  { name: 'app', hex: '#0B1120', cls: 'bg-neden-app' },
]

export default function Moodboard() {
  return (
    <div className="mx-auto max-w-content px-6 py-16">
      <p className="tw-section-label">Moodboard</p>
      <h1 className="font-display text-4xl tracking-tight text-neden-text mb-2">
        NEDEN visual system
      </h1>
      <p className="text-neden-muted mb-12 max-w-xl">
        Tokens explorés · Tailwind branché · vert = soutien · dual site/app.
        Docs : TOKENS.md · LOGO_TRACKS.md · WIREFRAMES_FULL.md
      </p>

      <h2 className="font-display text-2xl mb-4">Couleurs</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-16">
        {swatches.map((s) => (
          <div key={s.name} className="rounded-neden-lg border border-neden-border overflow-hidden">
            <div className={`h-16 ${s.cls}`} />
            <div className="p-2 text-xs text-neden-muted">
              <div className="text-neden-text">{s.name}</div>
              {s.hex}
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl mb-4">Composants Tailwind</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        <button type="button" className="tw-btn-primary">
          CTA orange
        </button>
        <button type="button" className="tw-btn-ghost">
          Ghost
        </button>
        <span className="tw-chip">Chip</span>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        <div className="tw-card">
          <h3 className="text-neden-text mb-2">Card site</h3>
          <p className="text-neden-muted text-sm">Hover glow vert support.</p>
          <p className="text-neden-green-light text-sm mt-2">Résultat XYZ</p>
        </div>
        <div className="tw-card bg-neden-app">
          <h3 className="text-neden-text mb-2">Card app</h3>
          <p className="text-neden-muted text-sm">Fond navy produit.</p>
        </div>
        <div className="tw-card">
          <h3 className="text-neden-text mb-2">Path energy</h3>
          <div
            className="h-1 w-full rounded-full mt-3"
            style={{
              background: 'linear-gradient(90deg, var(--neden-green-mid), var(--neden-cyan))',
            }}
          />
        </div>
      </div>

      <h2 className="font-display text-2xl mb-4">Logo tracks</h2>
      <ul className="text-neden-muted text-sm space-y-2 mb-8 list-disc pl-5">
        <li>Wordmark pur</li>
        <li>D miroir / cœur subtil</li>
        <li>Monogramme N + path</li>
        <li>Path-as-N stroke</li>
        <li>Palindrome / ambigram</li>
      </ul>
      <p className="text-neden-subtle text-sm">Détail prompts → docs/LOGO_TRACKS.md</p>

      <div className="mt-12 flex gap-6 items-center">
        <img src="/brand/logo.svg" alt="NEDEN wordmark" className="h-10" />
        <img src="/brand/favicon.svg" alt="NEDEN icon" className="h-14 w-14 rounded-2xl" />
      </div>
    </div>
  )
}
