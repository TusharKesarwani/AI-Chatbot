import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatInterface.css";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    // Add initial message when component mounts
    setMessages([{ text: "Hi, How can I help you today?", sender: "bot" }]);
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // User sends a query
      const response = await axios.post(
        "https://ai-chatbot-i2k7.onrender.com/query",
        {
          query: inputText,
        }
      );
      const responseData = response.data;

      // Update messages state array with the user query
      setMessages([...messages, { text: inputText, sender: "user" }]);

      // Delay the bot response to simulate a more realistic chat experience
      setTimeout(() => {
        // If bot response is available, display it
        if (Array.isArray(responseData.response)) {
          setMessages([
            ...messages,
            { text: inputText, sender: "user" },
            { text: responseData.response[0].answer, sender: "bot" },
          ]);
        } else {
          // If bot response is not available, display sorry message and option to escalate
          setMessages([
            ...messages,
            { text: inputText, sender: "user" },
            {
              text: "I'm sorry, I couldn't find an answer to your query.",
              sender: "bot",
            },
            {
              text: "Would you like to escalate to our doubt assistant?",
              sender: "bot",
              escalate: true, // Added a flag to identify the escalate message
            },
          ]);
        }
      }, 2000);
      setInputText("");
    } catch (error) {
      console.error("Error sending query:", error);
    }
  };

  const handleEscalate = async () => {
    // Remove the message prompting the user to escalate
    const newMessages = messages.filter((message) => message.escalate !== true);
    // Send the query to doubt assistant
    setMessages([
      ...newMessages,
      { text: "Sending query to doubt assistant...", sender: "bot" },
    ]);
  };

  return (
    <div className="chat-interface">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === "user" ? (
              <div className="user-message">{message.text}</div>
            ) : (
              <div className="bot-message">{message.text}</div>
            )}
          </div>
        ))}
        {messages.some((message) => message.escalate) && (
          <button onClick={handleEscalate}>
            Yes, escalate to doubt assistant
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
