import './Projects.css'
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects" id="projects">
      <div className="projects-page">

        <h1>{t("projects.title")}</h1>

        <p>{t("projects.description")}</p>

        <div className="projects-grid">
          <div className="project-card placeholder">
            <h3>{t("projects.comingSoonTitle")}</h3>
            <p>{t("projects.comingSoonText")}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects