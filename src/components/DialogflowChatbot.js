import React, { useEffect } from "react";

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
    <df-messenger
      intent="WELCOME"
      chat-title="Crime-Unfolded-ChatBot"
      agent-id="442ab90d-93de-41b5-b39f-23b8a3ab59fa"
      language-code="en"
      st="true" // Add this attribute with a boolean value as a string.
    ></df-messenger>
  );
};

export default DialogflowChatbot;
