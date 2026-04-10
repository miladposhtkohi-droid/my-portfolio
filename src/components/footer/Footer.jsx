import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Milad Poshtkohi</h3>
        <p>Crafting magical and modern web experiences.</p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-socials">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        <a href="mailto:miladposhtkohi@gmail.com">Email</a>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Milad Poshtkohi. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer