import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import './Chat.css';

const ENDPOINT = 'http://localhost:4000/';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  // const [apiResponse,setApiResponse]=useState('');

  useEffect(() => {
    var { name, room } = queryString.parse(location.search);
    
    console.log('in chatJs',room);

    var connectionOptions =  {
        "force new connection" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
    };

   socket = io.connect(ENDPOINT,connectionOptions);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, []);
  
  useEffect(() => {
    socket.on('message', message => {
      console.log(message);
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();
    
    if(message) {
        console.log(message);
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container-chat">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      
    </div>
  );
}

export default Chat;