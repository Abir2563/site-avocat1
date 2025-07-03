import React, { useState, useEffect } from 'react';
import "./newsletter.css";
import emailjs from '@emailjs/browser';
import Navbar1 from "../navbar1/navbar1";
import Navbar from "../navbar/navbar";
import GuidIcon from "../../images/n.jpg";
import FacilitIcon from "../../images/all.jpg";
import SoutenirIcon from "../../images/c.jpg";
import SurveillanceIcon from "../../images/ab.jpg";
function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // 5000 ms = 5 secondes
  
      return () => clearTimeout(timer); // Nettoyage si le composant est démonté
    }
  }, [submitted]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const templateParams = {
      user_email: email,
    };
  
    emailjs.send(
      'service_zrxdrh4',         // Ton Service ID depuis EmailJS
      'template_ymcybco',        // Ton Template ID
      templateParams,
      'xj1C9_y1tJbouJb7I'        // Ta Public Key
    )
    .then((response) => {
      console.log('Email envoyé avec succès !', response.status, response.text);
      setSubmitted(true);
    })
    .catch((error) => {
      console.error('Erreur lors de l’envoi de l’email :', error);
    });
  };
  
  
  return (
    <div>
   
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
      <div>
<br/>
      </div>
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 align="center">📬 Abonnez-Vous à notre NEWSLETTER</h2>
      <p  align="center" style={{ color: 'black' }}>Reçois les dernières nouvelles, offres et conseils directement dans votre boîte mail.</p>

      {submitted ? (
        <p align="center" style={{ color: 'green' }}><b>Merci pour votre inscription !</b></p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem ', width: '96%', marginBottom: '1rem' }}
          />
          <button type="submit" className="btn-submit" style={{ padding: '0.5rem 1rem' }}>S’inscrire</button>
        </form>
      )}
    </div>
<br/>


    </div>
  );
}

export default Newsletter;
