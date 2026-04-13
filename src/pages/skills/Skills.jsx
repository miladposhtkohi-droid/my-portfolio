import { motion as Motion } from "framer-motion";
import { skills } from "../../data/skillsData";
import "./Skills.css";
import { useTranslation } from "react-i18next";

// Färger för kategorier
const categoryColors = {
  Frontend: "#a78bfa",
  Backend: "#22c55e",
  Database: "#9333ea",
  Tools: "#f97316",
};

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Skills = () => {
  const { t } = useTranslation();

  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section className="skills" id="skills">
      <div className="skills-page">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="skills-wrapper"
        >
          <Motion.div variants={itemVariants} className="skills-header">
            <p className="skills-label">{t("skills.title")}</p>
            <h2>{t("skills.title")}</h2>
            <p>{t("skills.subtitle")}</p>
          </Motion.div>

          <div className="skills-categories">
            {categories.map((category) => (
              <Motion.div
                key={category}
                variants={itemVariants}
                className="skills-category"
              >
                <div className="category-heading">
                  <span
                    className="category-dot"
                    style={{ backgroundColor: categoryColors[category] }}
                  />
                  <h3>{t(`skills.categories.${category}`)}</h3>
                </div>

                <div className="skills-list">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <Motion.div
                          key={skill.name}
                          variants={itemVariants}
                          whileHover={{ y: -6, scale: 1.03 }}
                          className="skill-card"
                        >
                          <div className="skill-card-icon">
                            <Icon style={{ color: skill.color }} />
                          </div>
                          <span>{skill.name}</span>
                        </Motion.div>
                      );
                    })}
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
