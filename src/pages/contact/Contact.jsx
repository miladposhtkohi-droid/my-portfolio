import React, { useState } from 'react';
import './Contact.css';
import myImage from '../../assets/myImage/Milad PoshtkohiCV_250731_134601 - kopia.jpg';

const Contact = () => {
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
    setStatus("Skickar...");

    try {
      const res = await fetch("https://my-portfolio-9reu.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setStatus(data.message);

      // Rensa fälten
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      setStatus("Något gick fel. Försök igen.", error);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-page">
        <h1>Contact</h1>
        <p>Vill du komma i kontakt med mig? Hör gärna av dig!</p>

        <div className="contact-container">

          <div className="contact-image-box">
            <img src={myImage} alt="My Image" className="contact-image" />
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Lämna ett meddelande</h2>

            <label>Namn</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Meddelande</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Skicka</button>

            {status && <p className="contact-message">{status}</p>}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;