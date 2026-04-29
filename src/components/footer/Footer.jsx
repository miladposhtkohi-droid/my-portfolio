import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">

      {/* Top section */}
      <div className="footer-top">
        <h3>Milad Poshtkohi</h3>
        <p>{t("footer.description")}</p>
      </div>

      {/* Navigation links */}
      <div className="footer-links">
        <a href="#home">{t("navbar.home")}</a>
        <a href="#projects">{t("navbar.projects")}</a>
        <a href="#skills">{t("navbar.skills")}</a>
        <a href="#contact">{t("navbar.contact")}</a>
      </div>

      {/* Social links */}
      <div className="footer-socials">
        <a href="https://github.com/miladposhtkohi-droid" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="linkedin.com/in/milad-poshtkohi-810618207" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Milad Poshtkohi — {t("footer.rights")}</p>
      </div>

    </footer>
  );
};

export default Footer;