import { useState } from "react";
import logo from "../../assets/logo/Magisk logotyp med _.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="logo-container">
          <button className="logo-btn" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Logo" />
          </button>
        </div>

        {/* Desktop links */}
        <nav className="nav-links">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;