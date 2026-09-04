import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <header className="nav">
        <Link to="/" className="logo">NEDEN</Link>
        <nav>
          <a href="/#profil">Profil</a>
          <a href="/#parcours">Parcours</a>
          <a href="/#realisations">Réalisations</a>
          <a href="/#neden">NEDEN</a>
          <a href="/#contact" className="btn-primary">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <Link to="/privacy">Confidentialité</Link>
        <Link to="/cgu">CGU</Link>
        <span>© 2026 Sébastien Cheval</span>
      </footer>
    </div>
  )
}
