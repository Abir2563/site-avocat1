import React from 'react';
import './FloatingButton.css'; // Pour les styles du bouton flottant
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
const FloatingButton = ({ onClick, label =  <FontAwesomeIcon icon={faCommentDots} /> }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default FloatingButton;