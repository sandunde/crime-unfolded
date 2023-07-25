import React, { useEffect } from "react";
import { TbMessageChatbot } from "react-icons/tb";

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
    <>
      <style>
        {`
          df-messenger {
            --df-messenger-button-titlebar-color: #3c3c3c;
          }
        `}
      </style>
      <df-messenger
  intent="WELCOME"
  chat-title="Sherlock-AI"
  agent-id="442ab90d-93de-41b5-b39f-23b8a3ab59fa"
  language-code="en"
></df-messenger>
    </>
  );
};

export default DialogflowChatbot;
