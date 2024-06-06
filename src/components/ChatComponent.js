// components/home/ChatComponent.js
import { useState , useEffect} from "react";
import ChatState from "../services/chatService";

const Chat = ({ grade }) => {
  const { messages, sendMessage } = ChatState({ grade });
  const [newMessage, setNewMessage] = useState("");

  // const handleClick = () => {
  //   sendMessage(newMessage);
  //   setNewMessage("");
  // };

  const [inputs, setInputs] = useState({ message: "" });
  // const [messages, setMessages] = useState([]);
  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  }
useEffect(() => {
  const messageContainer = document.querySelector(".messages");
  messageContainer.scrollTop = messageContainer.scrollHeight; 
},[messages])

  function handleSubmit(event) {
    event.preventDefault();
    const message = inputs.message.trim();
    if (message) {
      sendMessage( message);
      setInputs((values) => ({ ...values, message: "" })); // Clear the input field after submission
    }
  }

  return (
    <div className=" bg-red-50 h-auto">

      <div className="messages relative bg-green-300 w-4/6
       mx-auto p-5 h-96 overflow-auto resize 
       rounded-md scroll-smooth
       will-change-scroll scrollbar-hidden">
        first relative parent

        {messages.map((msg, index) => (
          <div
            key={index}
            className="avatar-group rtl:space-x-reverse flex space-x-1 p-5
           bg-blue-50 w-5/6 h-2/8 ml-auto mr-auto   "
          >
            <div>
              <div className="avatar">
                <div className="w-12">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>

            <div className="chat chat-start text-wrap text-left overflow-y-auto resize rounded-md">
              <div className="chat-bubble chat-bubble-success whitespace-normal break-words select-text">
                {msg}
              </div>
            </div>

          </div>
        ))}
      </div>

        {/* { this is the part of the input 7777777777777777777} */}
      <div className="flex space-x-2 p-3 w-1/2   inset-x-0 bottom-0 mx-auto resize rounded-md">
        <form
          onSubmit={handleSubmit}
          className="flex space-x-2 p-3 bg-green-50 w-full resize rounded-md"
        >
          <input
            type="text"
            value={inputs.message}
            name="message"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered input-accent w-full  grow caret-pink-500 "
          />
          <button className="btn btn-info" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Send
          </button>
        </form>
      </div>

    </div>
  );
};

export default Chat;
