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

// import axios from "axios";
// import { useState, useEffect, useRef } from "react";

// const ChatState = ({ grade }) => {
//   const [messages, setMessages] = useState([]);
//   const socketRef = useRef(null);

//   useEffect(() => {
//     // fetch historical messages from the server
//     axios
//       .get(
//         `http://localhost:8000/chat/get_all_messages/grade1/`
//         //   ,{
//         //   grade: grade,
//         // }
//       )
//       .then((response) => {
       
//         console.log(response.data);
       
       
//         const messages = response.data.messages.
//         map(([id,message]) =>   message).map(({content, email , time , avatar_url,name ,message_id }) => 
//           { return { 
//             content: content,
//               email:email,
//                time : time,
//                avatar_url:avatar_url,
//                name:name,
//                message_id:message_id
//               };
//               })
//         // console.log(messages);
//         // console.log(messages2);
//         console.log(messages);

//         setMessages(messages);
//       })
//       .catch((error) => {
//         console.error("Error fetching historical messages:", error);
//       });
//     // Adjust WebSocket URL according to your setup
//     const wsUrl = `ws://localhost:8000/ws/chat/${grade}/`;
//     socketRef.current = new WebSocket(wsUrl);

//     const socket = socketRef.current;
//     // console.log("grade", grade, wsUrl);

//     socket.onopen = () => {
//       console.log("WebSocket connected from bassem it is grade:", grade);
//       socket.send(
//         JSON.stringify({
//           type: "joined",
//           // message_id: "bassem",
//           content: "we opened the websocket ok ",
//           name:"bassem",
//           email: "bassem@gmail.com",
//           grade: grade,
//           time: Date.now(),
//           avatar_url: "https://example.com/avatar.jpg",
//         })
//       );
//       console.log("we send a message form nextjs and here it is:", {
//         type: "joined",
//         message_id: "bassem",
//         content: "we opened the websocket ok ",
//         name: "bassem",
//         email: "bassem@gmail.com",
//         grade: grade,
//         time: Date.now(),
//       });
//       // all this is not important for now lol~ ~
//       // Send a message to the server when the connection is opened
//       const message = { type: "joined", content: grade };
//       // message from the chat client.
//       // const msg = {
//       //   type: "message",
//       //   text: document.getElementById("text").value,
//       //   id: clientID,
//       //   date: Date.now(),
//       // };

//       // Send the msg object as a JSON-formatted string.
//       // exampleSocket.send(JSON.stringify(msg));
//       // socket.send(JSON.stringify(message));
//     };
//     socket.onmessage = (event) => {
//       // Assuming your server sends JSON messages
//       const data = JSON.parse(event.data);
//       console.log("first <data>from onmessage </data> ", data);
//       const message = data.message;
//       console.log(
//         message
//       );
//       const message1 = {
//         content: message.content,
//         name: message.name,
//         email: message.email,
//         time: message.time,
//         avatar_url: message.avatar_url,
//       };
//       setMessages((prevMessages) => [...prevMessages, message1]);
//     };
//     socket.onclose = () => {
//       console.log(
//         "WebSocket disconnected >>>>>> means we are not connected to the server"
//       );
//     };

//     socket.onerror = (error) => {
//       console.error("WebSocket error:", error);
//     };

//     return () => {
//       socket.close();
//     };
//   }, [grade]);

//   const sendMessage = async (message) => {

//     const messageData = {
//       type: "message",
//       content: message,
//       grade: grade,
//       time: new Date().toISOString(),
//       name: "bassem",
//       email: "bassem@gmail.com",
//       avatar_url: "https://example.com/avatar.jpg",
//     };
//     if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
//       socketRef.current.send(
//         JSON.stringify( messageData )
//       );

//       console.log(
//         "we send a message form nextjs to >django>>> but from sendMessage function >< ~ ~ he :",
//         messageData
//       );
//     }

//       // Save the message to the database using Axios
//   try {
//     const response = await axios.post('http://127.0.0.1:8000/chat/create_message/',
//        messageData);
//     console.log('Message saved to the database:', response.data);
//   } catch (error) {
//     console.error('Error saving message to the database:', error);
//   }
//   };

//   return { messages, sendMessage };
// };

// export default ChatState;

import axios from "axios";
import { useState, useEffect, useRef } from "react";

const ChatState = ({ grade }) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // Function to fetch historical messages from the server
    const fetchHistoricalMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/chat/get_all_messages/${grade}/`
        );

        const formattedMessages = response.data.messages.map(([id, message]) => ({
          content: message.content,
          email: message.email,
          time: message.time,
          avatar_url: message.avatar_url,
          name: message.name,
          message_id: id,
        }));

        setMessages(formattedMessages);
      } catch (error) {
        console.error("Error fetching historical messages:", error);
      }
    };

    // Connect to WebSocket and initialize event listeners
    const wsUrl = `ws://localhost:8000/ws/chat/${grade}/`;
    socketRef.current = new WebSocket(wsUrl);

    const socket = socketRef.current;

    socket.onopen = () => {
      console.log("WebSocket connected for grade:", grade);
      socket.send(
        JSON.stringify({
          type: "joined",
          content: "Joined the chat",
          name: "bassem",
          email: "bassem@gmail.com",
          grade: grade,
          time: Date.now(),
          avatar_url: "https://example.com/avatar.jpg",
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received message:", data);
      const { content, email, time, avatar_url, name, message_id } = data;

      setMessages((prevMessages) => [
        ...prevMessages,
        { content, email, time, avatar_url, name, message_id },
      ]);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Fetch historical messages from the server
    fetchHistoricalMessages();

    return () => {
      socket.close();
    };
  }, [grade]);

  const sendMessage = async (messageContent) => {
    const messageData = {
      type: "message",
      content: messageContent,
      grade: grade,
      time: new Date().toISOString(),
      name: "bassem",
      email: "bassem@gmail.com",
      avatar_url: "https://example.com/avatar.jpg",
    };
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(
              JSON.stringify( messageData )
            );
      
            console.log(
              "we send a message form nextjs to >django>>> but from sendMessage function >< ~ ~ he :",
              messageData
            );
          }

    try {
      // Save the message to the database
      const response = await axios.post(
        "http://localhost:8000/chat/create_message/",
        messageData
      );

      console.log("Message saved to the database:", response.data);

      // Send the message via WebSocket
      if (socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(JSON.stringify(messageData));
      } else {
        console.error("WebSocket not open.");
      }
    } catch (error) {
      console.error("Error saving or sending message:", error);
    }
  };

  return { messages, sendMessage };
};

export default ChatState;
