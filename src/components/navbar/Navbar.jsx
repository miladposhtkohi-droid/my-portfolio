import logo from '../../assets/logo/Magisk logotyp med _.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar