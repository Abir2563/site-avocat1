import React, { useState } from 'react';
import './ChatInputavoca.css';

const ChatInputavoca = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      onSendMessage(input); // Send the message
      setInput(''); // Reset the input field
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-inputa">
      <input
        className="sentinput"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress} // Handle enter key
        placeholder="Write your question here..."
      />
      <button onClick={handleSend} className="sentbt">
        Send
      </button>
    </div>
  );
};

export default ChatInputavoca;
