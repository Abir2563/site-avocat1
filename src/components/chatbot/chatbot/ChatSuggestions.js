import React from 'react';
import Accordion from './Accordion';
import './ChatSuggestions.css';
const ChatSuggestions = ({ onSuggestionClick }) => {
  return (
    <div className="chat-suggestions">
      {/* Sections de suggestions avec accordéon */}
      <Accordion
        title="Business Law"
        content={
          <div >
            <button onClick={() => onSuggestionClick('Corporate Law')}>Corporate Law</button>
            <button onClick={() => onSuggestionClick('Commercial Law')}>Commercial Law</button>
            <button onClick={() => onSuggestionClick('Employment Law')}>Employment Law</button>
          </div>
        }
      />

      <Accordion
        title="Legal Help"
        content={
          <div>
            <button onClick={() => onSuggestionClick('Criminal Defense')}>Criminal Defense</button>
            <button onClick={() => onSuggestionClick('Family Law')}>Family Law</button>
            <button onClick={() => onSuggestionClick('Immigration Law')}>Immigration Law</button>
          </div>
        }
      />

      <Accordion
        title="Public Law"
        content={
          <div>
            <button onClick={() => onSuggestionClick('Constitutional Law')}>Constitutional Law</button>
            <button onClick={() => onSuggestionClick('Administrative Law')}>Administrative Law</button>
            <button onClick={() => onSuggestionClick('Environmental Law')}>Environmental Law</button>
          </div>
        }
      />

      <Accordion
        title="Private Law"
        content={
          <div>
            <button onClick={() => onSuggestionClick('Contract Law')}>Contract Law</button>
            <button onClick={() => onSuggestionClick('Property Law')}>Property Law</button>
            <button onClick={() => onSuggestionClick('Torts Law')}>Torts Law</button>
          </div>
        }
      />

      <Accordion
        title="General Info"
        content={
          <div>
            <button onClick={() => onSuggestionClick('About Us')}>About Us</button>
            <button onClick={() => onSuggestionClick('Contact Us')}>Contact Us</button>
            <button onClick={() => onSuggestionClick('FAQ')}>FAQ</button>
          </div>
        }
      />
    </div>
  );
};

export default ChatSuggestions;