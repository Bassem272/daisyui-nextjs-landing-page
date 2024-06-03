import { useState } from "react";
import ChatState from "../services/chatService";

const Chat = ({ grade }) => {
  const { messages, sendMessage } = ChatState({ grade });
  const [newMessage, setNewMessage] = useState("");

  const handleClick = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>{msg.text}</div>
      ))}

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleClick}>Send from {grade} component </button>
    </div>
  );
};

export default Chat;
