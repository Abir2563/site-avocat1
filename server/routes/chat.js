// Assuming you have already initialized Express
const express = require("express");
const router = express.Router();
const axios = require("axios"); // for making HTTP requests

// Endpoint for sending user inputs to Rasa and receiving bot responses
router.post("/chat", async (req, res) => {
  try {
    // Extract user input from request body
    const userInput = req.body.message;

    // Make a POST request to Rasa server
    const response = await axios.post(
      "http://127.0.0.1:5005/webhooks/rest/webhook",
      {
        message: userInput,
      }
    );

    // Extract bot response from Rasa server response
    const botResponse = response.data[0].text;

    // Send bot response back to frontend
    res.json({ message: botResponse });
  } catch (error) {
    console.error("Error communicating with Rasa server:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
