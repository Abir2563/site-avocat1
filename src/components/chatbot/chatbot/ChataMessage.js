import React from "react";

const ChataMessage = ({ message }) => {
  const isBot = message.sender === "bot";
  const alignment = isBot ? "left" : "right";
  const bubbleClass = isBot ? "bot-bubble" : "user-bubble";

  return (
    <div className={`message ${alignment}`}>
      <div className={`bubble ${bubbleClass}`}>{message.text}</div>
    </div>
  );
};

export default ChataMessage; // Default export
