import React, { useState } from "react";
import axios from "axios";
import "./chat.css"; // Import the CSS file
import Navbar from "../navbar/navbar";

function ChatInterface() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    try {
      // Send user input to backend router
      const response = await axios.post("http://localhost:8080/api/chat/chat", {
        message: userInput,
      });

      // Update chat history with both user input and bot response
      setChatHistory([
        ...chatHistory,
        { user: userInput },
        { bot: response.data.message },
      ]);

      // Clear user input
      setUserInput("");
    } catch (error) {
      console.error("Error communicating with backend router:", error);
      // Handle error
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <Navbar />
      <div className={`chat-container`}>
        <h1 className="NAME-CHATBOT">CHAT BOT</h1>
        <div className="cadre">
        <div className={`chat-history`}>
          {chatHistory.map((message, index) => (
            <div key={index} className={`${message.bot ? "bot-message" : ""}`}>
              {message.user && <span className={`user`}>{message.user}</span>}
              {message.bot && <span className={`bot`}>{message.bot}</span>}
            </div>
          ))}
        </div>
        </div>
        <div className="tt">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className={`chat-input`}
        />
        <button onClick={sendMessage} className={`send-button`}>
          Send
        </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
