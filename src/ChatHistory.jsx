import React from "react";
import ReactMarkdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
  return (
    <section className="space-y-2">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`p-2 rounded-md text-sm break-words ${
            message.type === "user"
              ? "bg-white border border-gray-300 text-gray-800"
              : "bg-purple-600 text-white"
          }`}
        >
          {message.type === "user" && (
            <span className="font-semibold text-gray-500 mr-2">You:</span>
          )}

          <div className="prose prose-sm prose-invert max-w-full">
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChatHistory;
