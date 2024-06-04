import { useState } from "react";
import ChatState from "../services/chatService";

const Chat = ({ grade }) => {
  // const { messages, sendMessage } = ChatState({ grade });
  // const [newMessage, setNewMessage] = useState("");

  // const handleClick = () => {
  //   sendMessage(newMessage);
  //   setNewMessage("");
  // };

  const [inputs, setInputs] = useState({ message: '' });
 const [messages, setMessages] = useState([]);
  function handleChange(event) {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = inputs.message.trim();
    if (message) {
      setInputs(values => ({ ...values, message: '' }));  // Clear the input field after submission
      setMessages(prevMessages => [...prevMessages, message]);
    }
  }

  return (
    <div>
      {/* {messages.map((msg, index) => (
        <div key={index}>{msg.text}</div>
      ))}

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleClick}>Send from {grade} component </button>
      */}
     
     
    

      <div className="messages">
        {inputs.message && (
          <div className="avatar-group rtl:space-x-reverse flex space-x-2 p-3">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-success">{inputs.message}</div>
            </div>
          </div>
        )}
         {messages.map((msg, index) => (
          <div key={index} className="avatar-group rtl:space-x-reverse flex space-x-2 p-5 bg-blue-100 w-1/2 ml-auto mr-auto">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-success text-wrap text-left" >{msg}</div>
            </div>
          </div>
        ))}
         <div className="flex space-x-2 p-3 w-1/2 mr-auto ml-auto">
        <form onSubmit={handleSubmit} className="flex space-x-2 p-3 bg-slate-400 w-full">
          <input
            type="text"
            value={inputs.message}
            name="message"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <button className="btn btn-info" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Send
          </button>
        </form>
      </div>
      </div>
    
    
    
    
    
    </div>
  );
};

export default Chat;
