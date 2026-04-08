import './Hero.css'
import logo from '../../assets/logo/Magisk logotyp med _.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Milad Poshtkohi</h1>
        <h2>Fullstack Developer & Creative UI Designer</h2>

        <p>
          I create modern, secure and visually magical web experiences.
          Focused on fullstack development, fantasy-inspired UI and clean architecture.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={logo} alt="Hero Logo" />
      </div>
    </section>
  )
}

export default Hero