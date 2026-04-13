import React from "react";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="home">
        <Hero />

        <section className="about">
          <h2>{t("home.about.title")}</h2>
          <p>{t("home.about.text")}</p>
        </section>

        <section className="tech">
          <h2>{t("home.tech.title")}</h2>
          <p>{t("home.tech.text")}</p>
        </section>

        <section className="values">
          <h2>{t("home.values.title")}</h2>
          <ul>
            <li>{t("home.values.item1")}</li>
            <li>{t("home.values.item2")}</li>
            <li>{t("home.values.item3")}</li>
            <li>{t("home.values.item4")}</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Home;
