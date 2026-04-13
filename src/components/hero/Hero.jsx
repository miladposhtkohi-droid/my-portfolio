import "./Hero.css";
import myImage from "../../assets/myImage/Milad.jpg";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 1.5,
      },
    },
  };

  return (
    <section className="hero">
      <Motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Motion.h1 variants={itemVariants}>{t("hero.name")}</Motion.h1>

        <Motion.h2 variants={itemVariants}>{t("hero.title")}</Motion.h2>

        <Motion.p variants={itemVariants}>{t("hero.description")}</Motion.p>

        <Motion.div className="hero-buttons" variants={buttonVariants}>
          <Motion.a
            href="#projects"
            className="btn secondary"
            whileHover="hover"
          >
            {t("hero.viewProjects")}
          </Motion.a>

          <Motion.a
            href="/cv.pdf"
            className="btn primary"
            download="Milad_Poshtkohi_CV.pdf"
            whileHover="hover"
          >
            {t("hero.downloadCV")}
          </Motion.a>
        </Motion.div>
      </Motion.div>

      <Motion.div
        className="hero-image"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={myImage} alt="Milad" />
      </Motion.div>
    </section>
  );
};

export default Hero;
