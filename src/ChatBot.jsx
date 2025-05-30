import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "./ChatHistory";
import Load from "./Load";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

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

      setChatHistory((prev) => [
        ...prev,
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

  const toggleChat = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <>
      {/* Toggle Button for Chatbot */}
      <img
        src="images/logo.jpg"
        alt="chatbot logo"
        onClick={toggleChat}
        className="fixed bottom-4 right-4 w-14 h-14 cursor-pointer z-50 transition-transform hover:scale-110 sm:w-16 sm:h-16"
      />

      {/* Chatbot Box */}
      {showChat && (
        <div
          className="
            fixed bottom-20 right-4
            w-[95vw] max-w-md max-h-[80vh]
            bg-white rounded-lg shadow-2xl
            flex flex-col z-40 overflow-hidden

            /* For small screens: full width minus margin */
            sm:w-[400px] sm:right-4 sm:bottom-20
          "
          style={{ minHeight: "300px" }}
        >
          {/* Header */}
          <div className="bg-purple-700 text-white text-center p-3 font-semibold">
            Meet ASHA AI
          </div>

          {/* Chat history + Loading spinner */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            <ChatHistory chatHistory={chatHistory} />
            <Load isLoading={isLoading} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="text"
                className="
                  flex-grow
                  px-4 py-2
                  rounded border border-gray-300
                  focus:outline-none focus:ring focus:ring-purple-400
                  text-sm
                  sm:text-base
                "
                placeholder="Type your message..."
                value={userInput}
                onChange={handleUserInput}
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="
                  bg-purple-600
                  text-white
                  px-4 py-2
                  rounded
                  hover:bg-purple-700
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  text-sm sm:text-base
                "
              >
                Send
              </button>

              <button
                type="button"
                onClick={clearChat}
                disabled={isLoading}
                className="
                  bg-red-500
                  text-white
                  px-4 py-2
                  rounded
                  hover:bg-red-600
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  text-sm sm:text-base
                "
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
