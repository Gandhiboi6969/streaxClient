import React, { useEffect, useState } from 'react';
import Timer from '../Timer/Timer.js';
import Chat from '../Chat/Chat.js';
import Todo from '../Todo/TodoList.js';
import Navbar from '../Navbar/Navbar';
import './Room.css';
import SessionInfo from '../SessionInfo/SessionInfo.js';
import Participants from '../Participants/Participants.js';
import queryString from 'query-string';
function Room({location}) {
    var { room } = queryString.parse(location.search);
    const [invalid,setInvalid]=useState(false);
    
    useEffect(()=>{

        


        fetch(`https://streax-app.herokuapp.com/checkMehfilExists`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                roomName: room,
               
              }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
              'Access-Control-Allow-Origin':'*'
            }
          })
            .then(res => res.json())
            .then(data => {
             if(data==='Error 404!'){setInvalid(true);}
             
            });
    },[room])
    
    useEffect(()=>{
        fetch(`https://streax-app.herokuapp.com/checkParticipants`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                roomName: room,
               
              }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
          })
            .then(res => res.json())
            .then(data => {
             console.log(data);
             
            });
    },
    
    [room])

  
  if(invalid)return (
      <h1>Invalid Mehfil</h1>
  )


    else{





    return (

   



        <React.Fragment>
            <Navbar />
            <div className="conatiner pt-5">
                <div class="row">
                    <div class="col-12 col-md-4 mb-5 mb-md-0">
                        <div class="card pricing-card" >
                            {/* <div class="card-header-room card-header">
                            </div> */}
                            <div class="card-body-room card-body card-timer-nikhar">
                                <Timer />
                                {/* <h1>jsbd</h1> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-5 mb-md-0">
                        <div class="card pricing-card" >
                            {/* <div class="card-header-room card-header">
                            </div> */}
                            <div class="card-body-room card-body">
                                <SessionInfo />
                                {/* <h1>jsbd</h1> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-5 mb-md-0">
                        <div class="card pricing-card" >
                            {/* <div class="card-header-room card-header">
                            </div> */}
                            <div class="card-body-room card-body">
                                <Participants room={room} />
                                {/* <h1>jsbd</h1> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4 mb-5 mb-md-0">
                        <div class="card pricing-card" >
                            {/* <div class="card-header-room card-header">
                            </div> */}
                            <div class="card-body-room card-body">
                                <Todo />
                                {/* <h1>jsbd</h1> */}
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-12 col-md-8 mb-5 mb-md-0" >
                        <div class="card pricing-card" >
                            {/* <div class="card-header-room card-header">
                            </div> */}
                            <div class="card-body-room card-body card-chat">
                                <Chat location={location} />
                                {/* <h1>jsbd</h1> */}
                            </div>
                        </div>
                    </div>
                    

                    
                   
                </div>
            </div>
        </React.Fragment>
    );
}
}
export default Room;

