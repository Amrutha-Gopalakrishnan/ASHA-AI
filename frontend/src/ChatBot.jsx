import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "./ChatHistory";
import Load from "./Load";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load API key from environment variables
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (!API_KEY) {
    console.error("API Key is missing! Add VITE_GEMINI_API_KEY in .env file.");
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;
      console.log(response);

      setChatHistory([
        ...chatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
  };


  return (

<div id="chat" className="mt-4 pt-4">
      <h1 className="fw-bold text-center">Meet ASHA AI</h1>

      <div className="container mt-4 d-flex justify-content-center">
        <div className="card shadow-lg border-0" style={{ width: "60rem" }}>
          <div className="card-body">
            <p className="card-text text-center">
              ASHA AI is your smart companion for job preparation and interview success.
              Whether you're looking for personalized interview tips, trending job roles,
              or expert guidance, ASHA AI provides real-time answers tailored to your career goals.
            </p>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column align-items-center mt-4">
        {/* Chat Box */}
        <div className="card w-75 mb-3 p-3">
          <div
            className="chat-box"
            style={{
              height: "300px",
              overflowY: "auto",
              backgroundColor: "#f8f9fa",
            }}
          >
            <ChatHistory chatHistory={chatHistory} />
            <Load isLoading={isLoading} />
          </div>
        </div>

        {/* Input Box */}
        <div className="card w-50 p-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
              style={{width:"200px"}}
            />
            <button className="btn btn-primary text-center d-flex justify-content-center align-item-center ms-2 mt-4 rounded" onClick={sendMessage} disabled={isLoading}>
              Send
            </button>
            <button className="btn btn-danger text-center d-flex justify-content-center align-item-center ms-2 mt-4 rounded" onClick={clearChat} disabled={isLoading}>
              Clear Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
