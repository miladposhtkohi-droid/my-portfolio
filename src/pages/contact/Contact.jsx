import React from 'react'
import './Contact.css'
import { useState } from 'react'
import myImage from '../../assets/myImage/Milad PoshtkohiCV_250731_134601 - kopia.jpg'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    //Rensa fälten
    setName('');
    setEmail('');
    setMessage('');

    alert('Tack för ditt meddelande!');
  }
  return (
    <section className="contact" id="contact">
    <div className='contact-page'>
       <h1>Contact</h1>
       <p>Vill du komma i kontakt med mig? Hör gärna av dig!</p>
       <div className="contact-container">
       <div className="contact-image-box">
              <img src={myImage} alt="My Image" className='contact-image' />  

      
       </div>
              <form className='contact-form'>
               <h2>Lmna ett meddelande</h2>
               <label>Namn</label>
               <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
               <label>Email</label>
               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
               <label>Meddelande</label>
               <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
               <button type="submit" onClick={handleSubmit}>Skicka</button>


              </form>


       </div>
    </div>
      </section>
  )
}

export default Contact
