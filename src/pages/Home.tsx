export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="path" aria-hidden />
        <div className="hero-content">
          <p className="eyebrow">Direction de projets créatifs & digitaux · Nantes</p>
          <h1>
            Je ne change pas de métier —
            <span className="accent"> j&apos;aligne le cadre.</span>
          </h1>
          <p className="lede">
            Stratégie × création × relation humaine. Un profil hybride pour structurer,
            créer et faire avancer — sans diluer le sens.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#parcours">Voir mon parcours</a>
            <a className="btn-ghost" href="#neden">Découvrir NEDEN</a>
          </div>
          <div className="kpis">
            <div><strong>10+</strong><span>années</span></div>
            <div><strong>50+</strong><span>clients</span></div>
            <div><strong>150+</strong><span>projets</span></div>
            <div><strong>Bac+4</strong><span>ISME</span></div>
          </div>
        </div>
      </section>

      <section id="profil" className="section reveal">
        <p className="section-label">Profil</p>
        <h2>Hybride par construction</h2>
        <p>
          Direction artistique, management de projets digitaux et relation client.
          Je structure, je crée, je fais avancer — le pourquoi avant la forme.
        </p>
      </section>

      <section id="parcours" className="section reveal">
        <p className="section-label">Parcours</p>
        <h2>Ce que j&apos;ai piloté</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Cyberscope</h3>
            <p className="card-meta">2018 → aujourd&apos;hui</p>
            <p>
              Pilotage produit & delivery Agile multi-clients, backlog, interface métiers / équipes.
            </p>
            <p className="card-result">150+ projets · continuité multi-comptes</p>
          </article>
          <article className="card">
            <h3>Animal &amp; Co</h3>
            <p className="card-meta">2017 — 2018</p>
            <p>Projets web, réseaux sociaux, contenus pour renforcer la présence de marque.</p>
            <p className="card-result">Visibilité digitale structurée</p>
          </article>
          <article className="card">
            <h3>Ernest Soulard</h3>
            <p className="card-meta">2014 — 2016</p>
            <p>Supports & projets web marque BtoC — image et engagement.</p>
            <p className="card-result">Cohérence marque renforcée</p>
          </article>
        </div>
      </section>

      <section id="competences" className="section reveal">
        <p className="section-label">Compétences</p>
        <h2>Ce que j&apos;active</h2>
        <ul className="icon-row">
          <li className="icon-chip">Product Ownership</li>
          <li className="icon-chip">Scrum / Kanban</li>
          <li className="icon-chip">Direction artistique</li>
          <li className="icon-chip">Storytelling</li>
          <li className="icon-chip">CRM & automation</li>
          <li className="icon-chip">Delivery digitale</li>
        </ul>
      </section>

      <section id="neden" className="section reveal">
        <p className="section-label">Produit</p>
        <h2>NEDEN — le cockpit</h2>
        <p>
          Suivi de candidatures, tâches, digests et automatisations.
          Un outil personnel pour rester aligné dans la recherche — et après.
        </p>
        <ul className="feature-pills">
          <li>Candidatures</li>
          <li>Tâches</li>
          <li>Agenda</li>
          <li>JARVIS</li>
          <li>CV adaptatif</li>
        </ul>
      </section>

      <section id="contact" className="section reveal">
        <p className="section-label">Contact</p>
        <h2>On en parle</h2>
        <p>
          <a className="btn-primary" href="mailto:sebchvl@gmail.com">sebchvl@gmail.com</a>
        </p>
      </section>
    </>
  )
}
