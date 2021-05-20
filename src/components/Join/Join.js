import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Join.css'

const Join = (props) => {
  const [room, setRoom] = useState('');
  
  function myFunction(event) {
    const x = (!room) ? event.preventDefault() : null;

    fetch("https://streax-app.herokuapp.com/createMehfil", {   
      method: "POST",
      body: JSON.stringify({
        roomName: room,
        
      }),
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        'Access-Control-Allow-Origin':'*'
      }

    }).then(res => res.json())
      .then(data =>console.log(data));

  }


  return (
    <React.Fragment>
      <Navbar />
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join Session</h1>
          <div> <input placeholder="Name" className="joinInput" type="text" value={props.user.firstName} disabled/></div>
          <div> <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event => { setRoom(event.target.value) })} /> </div>
          <Link onClick={myFunction} to={`/room?name=${props.user.firstName}&room=${room}`}>
            <button className="buttn bhagwa mt-20">Join Room</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Join;