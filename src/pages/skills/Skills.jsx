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

// Animationer
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
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
            <h2>{t("skills.title")}</h2>
            <p>{t("skills.subtitle")}</p>
          </Motion.div>

          <div className="skills-categories">
            {categories.map((category) => (
              <Motion.div key={category} variants={itemVariants}>
                <h3 className="category-title">
                  <span
                    className="category-dot"
                    style={{ backgroundColor: categoryColors[category] }}
                  />
                  {t(`skills.categories.${category}`)}
                </h3>

                <div className="skills-list">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <Motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.1 }}
                          className="skill-card"
                        >
                          <Icon
                            className="skill-icon"
                            style={{ color: skill.color }}
                          />
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