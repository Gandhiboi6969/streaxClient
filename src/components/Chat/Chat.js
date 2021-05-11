import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";


import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'http://localhost:5000/';

let socket;

  // componentDidMount(){
  //     // Simple POST request with a JSON body using fetch
  //     const requestOptions = {
  //         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }




const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [apiResponse,setApiResponse]=useState('');

 


  useEffect(() => {
    var { name, room } = queryString.parse(location.search);
    
    room=room.slice(0,room.indexOf(':'));
    
    
    
    var connectionOptions =  {
        "force new connection" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
    };

   socket = io.connect(ENDPOINT,connectionOptions);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();
    
    if(message) {
        
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