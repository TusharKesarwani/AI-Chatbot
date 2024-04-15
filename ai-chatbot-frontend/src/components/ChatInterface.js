import React, { useState } from "react";
import axios from "axios";
import "./ChatInterface.css";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://wild-lion-leather-jacket.cyclic.app/query", {
        query: inputText,
      });
      const responseData = response.data;

      // Update messages state array with the new user message object
      setMessages([...messages, { text: inputText, sender: "user" }]);

      // Delay the bot response to simulate a more realistic chat experience
      setTimeout(() => {
        // Update messages state array with the new bot message object
        if(Array.isArray(responseData.response)){
            setMessages([
              ...messages,
              { text: inputText, sender: "user" },
              { text: responseData.response[0].answer, sender: "bot" },
            ]);
        }
        else {
            setMessages([
              ...messages,
              { text: inputText, sender: "user" },
              { text: responseData.response, sender: "bot" },
            ]);
        }
    }, 2000);
      setInputText("");
    } catch (error) {
      console.error("Error sending query:", error);
    }
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
