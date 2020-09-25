import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import Axios from "./Axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Axios.get("api/v1/messages/sync").then((response) => {
      setMessages(response.data)
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("f60cf602b053992283d4", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
