import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { Avatar, Icon, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ChatMessage from "./ChatMessage";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from '@material-ui/icons/Send';
import Axios from "./Axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const ref = useRef(null);

  const sendMessage = async (event) => {
    event.preventDefault();

    await Axios.post("/api/v1/messages/new", {
      message: input,
      name: "currentUser", //use authorized user Firebase!!
      timestamp: new Date().toLocaleString(),
      received: true,
    });

    setInput("");
  };

  useEffect(() => {
    window.scrollTo(0, 100)
  }, [messages])

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h5>Room name</h5>
          <h6>Last seen at ...</h6>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        
        {messages.map((message) => (
                <ChatMessage message={message} ref={message._id === messages[messages.length()._id]? ref : null} key={message._id} />
        ))}
        {/* {messages.map(message => (
          <p className={`chatMessage ${message.received && "chatReceiver"}`}>
          <span className="chatMessage__name">{message.name}</span>
          {message.message}
  
          {console.log(message)}
          <span className="chatMessage__timestamp">{message.timestamp}</span>
        </p>
        ))} */}
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            value={input}
            placeholder="Type a message"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          
          <IconButton onClick={sendMessage} type="submit">
            <SendIcon/>
          </IconButton>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
