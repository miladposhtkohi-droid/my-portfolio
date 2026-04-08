import './Skills.css'

const Skills = () => {
  return (
    <div className="skills-page">

      <h1>Kompetenser</h1>

      <section className="skills-section">
        <h2>Tekniska färdigheter</h2>
        <ul>
          <li>React – komponentstruktur, hooks, UI/UX</li>
          <li>Node.js & Express – API-design, middleware, routing</li>
          <li>MongoDB – databaser, modeller, queries</li>
          <li>REST API – struktur, dokumentation, säkerhet</li>
          <li>Git & GitHub – versionshantering, branches, teamwork</li>
        </ul>
      </section>

      <section className="skills-section">
        <h2>Styrkor</h2>
        <ul>
          <li>Problemlösning och uthållighet</li>
          <li>Struktur och ren kod</li>
          <li>Kommunikation och samarbete</li>
          <li>Snabb inlärning och nyfikenhet</li>
          <li>UI/UX‑tänk från grafisk design</li>
        </ul>
      </section>

      <section className="skills-section">
        <h2>Arbetssätt</h2>
        <ul>
          <li>Agila metoder</li>
          <li>Iterativ utveckling</li>
          <li>Komponentbaserad frontend</li>
          <li>Modulär backend (routes, controllers, models)</li>
        </ul>
      </section>

    </div>
  )
}

export default Skills
