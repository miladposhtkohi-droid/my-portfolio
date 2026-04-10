

import './Projects.css'

const Projects = () => {
  return (
    <section className="projects" id="projects">
    <div className="projects-page">

      <h1>Projekt</h1>
      <p>
        Här kommer jag att visa upp mina fullstack‑projekt från Nackademin och egna projekt.
        Jag har byggt applikationer med React, Node.js, Express och MongoDB, samt utvecklat
        REST‑API:er och responsiva gränssnitt.
      </p>

      <div className="projects-grid">
        <div className="project-card placeholder">
          <h3>Kommer snart</h3>
          <p>Projekt läggs till inom kort.</p>
        </div>
      </div>

    </div>
  </section>
  )
}


export default Projects
