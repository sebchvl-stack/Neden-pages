export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="path" aria-hidden />
        <div className="hero-content">
          <p className="eyebrow">Direction de projets créatifs & digitaux · Nantes</p>
          <h1>
            Je ne change pas de métier —
            <span className="accent"> j'aligne le cadre.</span>
          </h1>
          <p className="lede">
            Stratégie × création × relation humaine. Un profil hybride pour structurer, créer et faire avancer.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#parcours">Voir mon parcours</a>
            <a className="btn-ghost" href="#neden">Découvrir NEDEN</a>
          </div>
          <div className="kpis">
            <div><strong>10+</strong><span>années</span></div>
            <div><strong>50+</strong><span>clients</span></div>
            <div><strong>200K€+</strong><span>CA piloté</span></div>
            <div><strong>Bac+4</strong><span>Marketing</span></div>
          </div>
        </div>
      </section>

      <section id="profil" className="section">
        <h2>Profil</h2>
        <p>
          Hybride : direction artistique, management de projets digitaux et relation client.
          Je structure, je crée, je fais avancer — sans diluer le sens.
        </p>
      </section>

      <section id="neden" className="section">
        <h2>NEDEN — l'outil</h2>
        <p>
          Suivi de candidatures, tâches, digests et automatisations.
          Un cockpit personnel pour rester aligné dans la recherche et au-delà.
        </p>
        <ul className="feature-pills">
          <li>Candidatures</li>
          <li>Tâches</li>
          <li>Agenda</li>
          <li>JARVIS assistant</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p><a href="mailto:sebchvl@gmail.com">sebchvl@gmail.com</a></p>
      </section>
    </>
  )
}
