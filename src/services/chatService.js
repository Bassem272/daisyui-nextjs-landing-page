import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const ChatState = ({ grade }) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // Adjust WebSocket URL according to your setup
    socketRef.current = io("ws://localhost:8000/ws/chat/", {
      transports: ["websocket"],
    });
    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("connected");
      socket.emit("joined", grade);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("chat.message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [grade]);

  const sendMessage = (message) => {
    socketRef.current.emit("message", { grade, message });
  };

  return { messages, sendMessage };
};

export default ChatState;
