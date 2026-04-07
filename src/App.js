import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const [typingUser, setTypingUser] = useState("");

  const joinChat = () => {
    if (username.trim() !== "") {
      socket.emit("join", username);
      setJoined(true);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    socket.on("typing", (user) => {
      setTypingUser(user + " is typing...");
    });

    socket.on("stop_typing", () => {
      setTypingUser("");
    });

    return () => {
      socket.off("receive_message");
      socket.off("typing");
      socket.off("stop_typing");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("send_message", message);
      setMessage("");
      socket.emit("stop_typing");
    }
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);

    if (e.target.value.trim() !== "") {
      socket.emit("typing");
    } else {
      socket.emit("stop_typing");
    }
  };

  // 🔹 JOIN UI
  if (!joined) {
    return (
      <div className="join-container">
        <h2 style={{ color: "white" }}>💬 Join Chat</h2>
        <input
          className="join-input"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="send-btn" onClick={joinChat}>
          Join
        </button>
      </div>
    );
  }

  // 🔹 CHAT UI
  return (
    <div className="chat-container">
      <h2 style={{ color: "white" }}>💬 Live Chat Room</h2>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.user === username ? "my-message" : "other-message"
            }`}
          >
            <b>{msg.user}</b>: {msg.message}
          </div>
        ))}
      </div>

      <p className="typing">{typingUser}</p>

      <div className="input-area">
        <input
          className="input-box"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleTyping}
        />
        <button className="send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;