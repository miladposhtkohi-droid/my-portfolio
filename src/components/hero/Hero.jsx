import "./Hero.css";
import logo from "../../assets/logo/Magisk logotyp med _.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t("hero.name")}</h1>
        <h2>{t("hero.title")}</h2>

        <p>{t("hero.description")}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn secondary">
            {t("hero.viewProjects")}
          </a>

          <a
            href="/cv.pdf"
            className="btn primary"
            download="Milad_Poshtkohi_CV.pdf"
          >
            {t("hero.downloadCV")}
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={logo} alt="Hero Logo" />
      </div>
    </section>
  );
};

export default Hero;
