import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Bascule entre ouvert et fermé
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span className={`arrow ${isOpen ? 'down' : 'right'}`}></span> {/* Flèche pour indiquer l'état */}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>} {/* Afficher le contenu si ouvert */}
    </div>
  );
};

export default Accordion;