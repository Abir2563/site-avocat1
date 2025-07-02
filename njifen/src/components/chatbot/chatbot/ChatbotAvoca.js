import React, { useState } from "react";
import axios from "axios";
import ChatInputAvoca from "./ChatInputavoca";
import ChataMessage from "./ChataMessage";
import ChatSuggestions from "./ChatSuggestions";
import "./ChatbotAvoca.css";

const ChatbotAvoca = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome!", sender: "bot" },
    { text: "How may I assist you today?", sender: "bot" },
  ]);

  const handleSendMessage = async (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
    ]);

    try {
      const response = await axios.post("http://localhost:8080/api/chat/chat", {
        message,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.reply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message to backend:", error);
      // Optionally, handle the error by updating the state or showing a message to the user
    }
  };

  return (
    <div>
      <div className="chatbotavoca">
        <div className="messages">
          {messages.map((msg, index) => (
            <ChataMessage key={index} message={msg} />
          ))}
        </div>
        <ChatSuggestions onSuggestionClick={handleSendMessage} />
        <ChatInputAvoca onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatbotAvoca; // Default export
