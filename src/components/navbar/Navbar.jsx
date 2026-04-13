import { useEffect, useState } from "react";
import logo from "../../assets/logo/Magisk logotyp med _.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const links = [
  { id: "home", labelKey: "navbar.home" },
  { id: "projects", labelKey: "navbar.projects" },
  { id: "skills", labelKey: "navbar.skills" },
  { id: "contact", labelKey: "navbar.contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "sv" : "en";
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPos >= sectionTop) {
            current = link.id;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo-container">
          <button className="logo-btn" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Logo" />
          </button>
        </div>

        <nav className="nav-links">
          {links.map((link) => (
            <button
              key={link.id}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => scrollToSection(link.id)}
            >
              {t(link.labelKey)}
            </button>
          ))}
        </nav>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          {links.map((link) => (
            <button
              key={link.id}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => scrollToSection(link.id)}
            >
              {t(link.labelKey)}
            </button>
          ))}
          <button className="language-mobile" onClick={changeLanguage}>
            {i18n.language === "en" ? "SV" : "EN"}
          </button>
        </div>

        <div className="language-toggle">
          <button onClick={changeLanguage}>
            {i18n.language === "en" ? "SV" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
