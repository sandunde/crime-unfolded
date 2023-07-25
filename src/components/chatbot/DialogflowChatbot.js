import React, { useEffect } from "react";
import "./Chatbot.css"; // Import the CSS file

const DialogflowChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="chatbot-container"> 
      <df-messenger
        intent="WELCOME"
        chat-title="Sherlock-AI"
        agent-id="442ab90d-93de-41b5-b39f-23b8a3ab59fa"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default DialogflowChatbot;
