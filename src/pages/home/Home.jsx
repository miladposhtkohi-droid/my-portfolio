import React from "react";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";

const Home = () => {
  const { t } = useTranslation();

  // Animation variants för sektioner
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="home" id="home">
      <div className="home">
        <Hero />

        <Motion.section
          className="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Motion.h2 variants={itemVariants}>{t("home.about.title")}</Motion.h2>
          <Motion.p variants={itemVariants}>{t("home.about.text")}</Motion.p>
        </Motion.section>

        <Motion.section
          className="tech"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Motion.h2 variants={itemVariants}>{t("home.tech.title")}</Motion.h2>
          <Motion.p variants={itemVariants}>{t("home.tech.text")}</Motion.p>
        </Motion.section>

        <Motion.section
          className="values"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Motion.h2 variants={itemVariants}>
            {t("home.values.title")}
          </Motion.h2>
          <Motion.ul variants={sectionVariants}>
            <Motion.li variants={listItemVariants}>
              {t("home.values.item1")}
            </Motion.li>
            <Motion.li variants={listItemVariants}>
              {t("home.values.item2")}
            </Motion.li>
            <Motion.li variants={listItemVariants}>
              {t("home.values.item3")}
            </Motion.li>
            <Motion.li variants={listItemVariants}>
              {t("home.values.item4")}
            </Motion.li>
          </Motion.ul>
        </Motion.section>
      </div>
    </section>
  );
};

export default Home;
