import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div id="chat">
        <section id="chat" className="mt-4 pt-4">
            <br></br>
            <h1 className="fw-bold text-center">Chat with AI</h1>
            <p className="fw-bold text-center fs-4 pt-2">ASHA AI Chatbot 🤖</p>
            <div className="container">
            <p className="fs-5 pt-2 text-center">The ASHA AI Chatbot is your personal AI assistant designed to help with interview preparation, answer queries, and solve issues instantly. Whether you need guidance on interview questions, career advice, or troubleshooting support, ASHA AI is here to assist you!
💬 Ask your queries now and get instant solutions! 🚀</p>
</div>
    <div className="container mt-1">
      <div className="card pt-1">
        <div 
          className="chat-box d-flex align-items-center justify-content-center"
          style={{ 
            height: "300px", 
            overflowY: "auto", 
            backgroundColor: "#f8f9fa",
            position: "relative",
            textAlign: "center"
          }}
        >
          {messages.length === 0 ? (
            <p 
              className="text-muted position-absolute top-50 start-50 translate-middle"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              ASHA AI Chatbot
            </p>
          ) : (
            <div className="w-100">
              {messages.map((msg, index) => (
                <div key={index} className={`alert ${msg.sender === "user" ? "alert-primary" : "alert-secondary"}`}>
                  <strong>{msg.sender === "user" ? "You" : "Asha AI"}:</strong> {msg.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="input-group mt-1">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about interview questions..."
          />
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
    </section>
    <br></br>
    </div>
  );
};

export default Chatbot;
