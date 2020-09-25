import React, { useEffect, useState } from "react";
import "./ChatMessage.css";

function ChatMessage({message}) {

  
  console.log(message)
  return (
    <div className={`chatMessage ${message.received && "chatReceiver"}`}>
      <span className="chatMessage__name">{message.name}</span>
        {message.message}

      {console.log(message)}
      <span className="chatMessage__timestamp">{message.timestamp}</span>
      
    </div>
  );
}

export default ChatMessage;
