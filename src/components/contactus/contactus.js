import React, { useState, useEffect } from "react";
import "./contactus.css";
import emailjs from 'emailjs-com';
import axios from "axios"; // Import axios for making HTTP requests
import MapImg from "../../images/map.png";
<<<<<<< HEAD
import Navbar1 from "../navbar1/navbar1";
=======
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
import Navbar from "../navbar/navbar";
import userIcon from "../../images/LinkedInlogo.png";
import FcbkIcon from "../../images/Facebook F.png";
import phoneIcon from "../../images/Phone.png";
import AddressIcon from "../../images/Address.png";
import letterIcon from "../../images/Letter.png";
import rwanda from "../../images/rwanda.png";
import Nantes from "../../images/Nantes.png";

const ContactForm = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [MapImg, rwanda, Nantes]; // Add other image URLs or imports as necessary
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Change the image index every 2 seconds
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // change to 2000 milliseconds (2 seconds)
  
      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, [images.length]);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    description: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const serviceID = 'service_zrxdrh4';
    const templateID = 'template_ibwgovs';
    const userID = 'xj1C9_y1tJbouJb7I';

    const templateParams = {
      prenom: formData.prenom,
      nom: formData.nom,
      email: formData.email,
      telephone: formData.telephone,
      description: formData.description,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setStatusMessage('✅ Message envoyé avec succès !');
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          description: '',
        });
        setLoading(false);
        setTimeout(() => setStatusMessage(''), 5000);
      })
      .catch((error) => {
        console.error('Erreur EmailJS:', error);
        setStatusMessage('❌ Erreur lors de l\'envoi, réessayez plus tard.');
        setLoading(false);
      });
  };

  return (
    <div id="spann">
      <div>
<<<<<<< HEAD
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
=======
        <Navbar />
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
      </div>
      <div id="spann">
        <span>
          <div className="TopContainer">
            <div className="line-leftLine"></div>
            <h1 id="ContactTitle">Contactez-Nous!</h1>
            <div className="line-rightLine"></div>
          </div>
          <div className="BotContainer">
            <div className="contactForm">
                <div className="form-container">
                    <h2>Contactez-nous</h2>
                    <form onSubmit={handleSubmit} className="form-content">
                      <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
                      <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
                      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                      <input type="text" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />
                      <textarea name="description" placeholder="Votre message..." value={formData.description} onChange={handleChange} required />
                      <button type="submit" disabled={loading}>
                        {loading ? 'Envoi en cours...' : 'Envoyer'}
                      </button>
                      {statusMessage && <p className="status-message">{statusMessage}</p>}
                    </form>
                </div>

            </div>
            <div className="contactInfo">
              <div>
                <img
                  src={images[currentImageIndex]}
                  alt="image"
                  className="mapImg"
                />
              </div>
              <div className="oneline">
                <div className="abovemap">
                  <img src={userIcon} alt="linkedin icon" className="Icon" />
                  <a
                    className="linkinfo"
                    href="https://www.linkedin.com/company/njifen-law-firm/"
                  >NJIFEN & C.O. LAW FIRM </a>

                </div>
                <div className="abovemap">
                  <img src={FcbkIcon} alt="facebook icon" className="Icon" />
                  <a
                    className="linkinfo"
                    href="https://www.facebook.com/profile.php?id=61568953924546&locale=fr_FR"
                  >NJIFEN LAW FIRM </a>
                </div>
              </div>
              <div className="oneline">
                <div className="abovemap">
                  <img
                    src={AddressIcon}
                    alt="adress icon"
                    className="Icon"
                  />
                  <p className="phonenumbers">France: 6 Allée Beau Rivage, 44200 Nantes<br/>
                  Cameroun: Douala, Rond-point Maetur, Bonamoussadi<br/>
                  Rwanda: District de Nyarugenge, Secteur de Nyamirambo,<br/> Kigali</p>
                </div>
                <div className="abovemap">
                  <img src={phoneIcon} alt="phone icon" className="Icon" />
                  <p className="phonenumbers">
                    +33 7 80 81 42 74
                    <br />
                    +237 696 57 60 03
                    <br />
                    +237 670 05 47 41
                    <br />
                    +250 786 887 161
                  </p>
                </div>


              </div>
              <div className="oneline">

                <div className="abovemap">
                  <img
                    src={letterIcon}
                    alt="letter icon"
                    className="Iconemail"
                  />
                  <p className="phonenumbers">njifenlawfirm@gmail.com</p>
                </div>
              </div>
              
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default ContactForm;
