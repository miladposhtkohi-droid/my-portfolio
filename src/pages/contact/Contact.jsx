import "./Contact.css";
import logo from "../../assets/logo/Magisk logotyp med _.png";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  const contactEmail = "miladposhtkohi@gmail.com";

  return (
    <section className="contact" id="contact">
      <div className="contact-page">
        <div className="contact-header">
          <div className="contact-copy">
            <p className="contact-label">{t("contact.title")}</p>
            <h1>{t("contact.title")}</h1>
            <p className="contact-subtitle">{t("contact.subtitle")}</p>
            <p className="contact-description">{t("contact.description")}</p>
            <div className="contact-actions">
              <a className="btn primary" href={`mailto:${contactEmail}`}>
                {t("contact.emailButton")}
              </a>
              <a className="btn secondary" href="/cv.pdf" download>
                {t("contact.resumeButton")}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-card contact-card-grid">
            <div className="image-card">
              <img src={logo} alt="Logo" className="contact-image" />
            </div>

            <div className="info-card">
              <h2>{t("contact.connectTitle")}</h2>
              <p>{t("contact.connectText")}</p>
              <div className="contact-details">
                <span>{t("contact.available")}</span>
                <a className="contact-email" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
                <div className="contact-links">
                  <a
                    href="https://github.com/miladposhtkohi-droid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="contact-link-icon" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/milad-poshtkohi-810618207/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin className="contact-link-icon" />
                    LinkedIn
                  </a>
                  <a
                    href="https://wa.me/46702633193"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="contact-link-icon" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
