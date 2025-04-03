require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Message cannot be empty!" });
  }

  try {
    const response = await axios.get(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
      {
        contents: [{ parts: [{ text: userMessage }] }],
      },
      { headers: { Authorization: `Bearer ${GEMINI_API_KEY}` } }
    );

    const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that request.";

    res.json({ reply: botReply });
  } catch (error) {
    console.error("Error fetching response:", error);
    res.status(500).json({ reply: "Error processing your request." });
  }

});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
