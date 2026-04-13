import React, { useState } from 'react';
import './Contact.css';
import myImage from '../../assets/myImage/Milad PoshtkohiCV_250731_134601 - kopia.jpg';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t("contact.sending"));

    try {
      const res = await fetch("https://my-portfolio-9reu.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setStatus(data.message);

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      setStatus(t("contact.error"));
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-page">

        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>

        <div className="contact-container">

          <div className="contact-image-box">
            <img src={myImage} alt="My Image" className="contact-image" />
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>{t("contact.formTitle")}</h2>

            <label>{t("contact.name")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>{t("contact.email")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>{t("contact.message")}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">{t("contact.send")}</button>

            {status && <p className="contact-message">{status}</p>}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;