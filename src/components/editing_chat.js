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
    <div className=" bg-red-600 h-auto">
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
     
     
    

      <div className="messages relative bg-green-300 w-4/6 mx-auto p-5 h-96 overflow-auto">
        first relative parent

        {/* {inputs.message && (
          <div>
          <div className="avatar-group rtl:space-x-reverse flex space-x-2 p-3">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
            </div>

            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-success
              overflow-auto ">
               <div className="bg-blue-300 w-95%  text-wrap whitespace-pre-line 
               break-words"> {inputs.message} </div>
                <div className="chat-footer">You</div>
                </div>
            </div>
          </div> 
          
     </div>
        )} */}

         {messages.map((msg, index) => (
          <div key={index} className="avatar-group rtl:space-x-reverse flex space-x-1 p-5
           bg-blue-100 w-5/6 h-4/6 ml-auto mr-auto ">
            <div >
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
              </div>
            </div>
            </div>

            <div className="chat chat-start text-wrap text-left overflow-y-auto">
              <div className="chat-bubble chat-bubble-success whitespace-normal break-words" >{msg}</div>
            </div>

          </div>
        ))}


        {/* {messages.map((msg, index) => (
  <div key={index} className="avatar-group rtl:space-x-reverse flex space-x-2 p-5 bg-blue-100 w-1/2 ml-auto mr-auto">
    <div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
        </div>
      </div>
    </div>

    <div className="chat chat-start text-wrap text-left overflow-y-auto">
      <div className="chat-bubble chat-bubble-success whitespace-normal" style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>{msg}</div>
    </div>

  </div>
))} */}

              {/* { this is the part of the input 7777777777777777777} */}
       
      </div>
      <div className="flex space-x-2 p-3 w-1/2   inset-x-0 bottom-0 mx-auto ">
        <form onSubmit={handleSubmit} className="flex space-x-2 p-3 bg-slate-400 w-full">
          <input
            type="text"
            value={inputs.message}
            name="message"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered input-accent w-full  grow "
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
  );
};

export default Chat;