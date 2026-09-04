import { Link } from 'react-router-dom'
import { ReactNode, useState } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <div className="app">
      <header className="nav">
        <Link to="/" className="logo" onClick={close}>
          NEDEN
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} onClick={close}>
          <a href="/#profil">Profil</a>
          <a href="/#parcours">Parcours</a>
          <a href="/#competences">Compétences</a>
          <a href="/#neden">NEDEN</a>
          <a href="/#contact" className="btn-primary">
            Contact
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <Link to="/privacy">Confidentialité</Link>
        <Link to="/cgu">CGU</Link>
        <span>© 2026 Sébastien Cheval · Nantes</span>
      </footer>
    </div>
  )
}
