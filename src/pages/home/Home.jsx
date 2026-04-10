import React from 'react'
import Hero from '../../components/hero/Hero'
import './Home.css'

const Home = () => {
  return (
    <section className="home" id="home">
    <div className="home">

      <Hero />

      <section className="about">
        <h2>Om mig</h2>
        <p>
          Jag är en fullstack‑utvecklare med bakgrund inom grafisk design.
          Jag brinner för att skapa tydliga, användarvänliga och välstrukturerade digitala lösningar.
          Min styrka ligger i kombinationen av teknisk kompetens och visuellt tänkande.
        </p>
      </section>

      <section className="tech">
        <h2>Tekniker jag arbetar med</h2>
        <p>
          Under min utbildning på Nackademin har jag arbetat med moderna open‑source‑tekniker
          som React, Node.js, Express och MongoDB. Jag bygger fullstack‑applikationer,
          utvecklar REST‑API:er och skapar responsiva gränssnitt med fokus på ren kod och god UX.
        </p>
      </section>

      <section className="values">
        <h2>Hur jag arbetar</h2>
        <ul>
          <li>Strukturerad och tydlig kod</li>
          <li>Komponentbaserat tänk</li>
          <li>Agila arbetsmetoder</li>
          <li>Kommunikation och samarbete</li>
        </ul>
      </section>

    </div>
  </section>
  )
}

export default Home