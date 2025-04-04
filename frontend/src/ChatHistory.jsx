import React from "react";
import ReactMarkdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
  return (
    <>
    <section>
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`p-3 mb-2 rounded ${
            message.type === "user"
              ? "bg-light text-dark border"
              : "bg-primary text-white"
          }`}
        >
          {message.type === "user" && (
            <span className="fw-bold text-secondary me-2">You:</span>
          )}

          <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
      </section>
    </>
  );
};

export default ChatHistory;