import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // N'oublie pas de créer ce fichier CSS

const ContactForm = () => {
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
  );
};

export default ContactForm;
