// // components/services/chatService.js
// import { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";

// const ChatState = ({ grade }) => {
//   const [messages, setMessages] = useState([]);
//   const socketRef = useRef(null);

//   // useEffect(() => {
//   //   // Adjust WebSocket URL according to your setup
//   //   socketRef.current = io(`ws://localhost:8000/ws/chat/${grade}/`, {
//   //     transports: ["websocket"],
//   //   });
//   useEffect(() => {
//     // Adjust the URL to include the room name
//     console.log("grade", grade,`ws://localhost:8000/ws/chat/${grade}/` );
//     // socketRef.current = io(`ws://localhost:8000/ws/chat/${grade}/`, {
//     socketRef.current = io("ws://localhost:8000/ws/chat/testroom/", {
     
//       transports: ["websocket"],
//     });

//     const socket = socketRef.current;

//     socket.on("connect", () => {
//       console.log("connected");
//       socket.emit("joined", grade);
//     });

//     socket.on("disconnect", () => {
//       console.log("disconnected");
//     });

//     socket.on("chat.message", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);

//     });

//     socket.on("connect_error", (error) => {
//       console.error("WebSocket connection error:", error);
//     });

//     socket.on("error", (error) => {
//       console.error("WebSocket error:", error);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [grade]);

//   const sendMessage = (message) => {
//     socketRef.current.emit("message", { grade, message });
//   };

//   return { messages, sendMessage };
// };

// export default ChatState;


import { useState, useEffect, useRef } from "react";

const ChatState = ({ grade }) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // Adjust WebSocket URL according to your setup
    const wsUrl = `ws://localhost:8000/ws/chat/${grade}/`;
    socketRef.current = new WebSocket(wsUrl);

    const socket = socketRef.current;
    console.log("grade", grade, wsUrl);

    socket.onopen = () => {
      console.log("WebSocket connected from bassem it is grade:", grade);
      socket.send(JSON.stringify(
        {
          type:"joined",
          content:'we opened the websocket ok ',
          grade:grade,
          time: Date.now(),
          id: "bassem"

        }
      ));
      console.log('we send a message form nextjs and here it is:',{type:"joined",content:'we opened the websocket ok ',grade:grade});
      // all this is not important for now lol~ ~
      // Send a message to the server when the connection is opened
      const message = { type: "joined", content: grade };
      // message from the chat client.
  // const msg = {
  //   type: "message",
  //   text: document.getElementById("text").value,
  //   id: clientID,
  //   date: Date.now(),
  // };

  // Send the msg object as a JSON-formatted string.
  // exampleSocket.send(JSON.stringify(msg));
      // socket.send(JSON.stringify(message));
    };
   socket.onmessage = (event) => {
      // Assuming your server sends JSON messages
      const data = JSON.parse(event.data);
      const message = data.message;
      console.log(data,"we have a message in next js  from <<<< django> and here is the message:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    socket.onclose = () => {
      console.log("WebSocket disconnected >>>>>> means we are not connected to the server");
    };

 

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, [grade]);

  const sendMessage = (message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(
        {
          type:"joined",
          content:message,
          grade:grade,
          time: Date.now(),
          id: "bassem"
          
        }
      ));

      console.log("we send a message form nextjs to >django>>> but from sendMessage function >< ~ ~ he :",{type:"joined",content:message,grade:grade});
    }
  };

  return { messages, sendMessage };
};

export default ChatState;
