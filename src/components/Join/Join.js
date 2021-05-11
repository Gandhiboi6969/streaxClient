import React ,{useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css'

const Join=()=>{

    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    
    var url = new Date().getTime();

    function myFunction(event)
    {   
       const x=(!name||!room)?event.preventDefault():null;

        

         fetch("http://localhost:5000/createMehfil",{
          method:"POST",
          body: JSON.stringify({
            link:`http:localhost:5000/chat?name=${name}&room=${room+":"+url}`,
            userName:name
          }),
          mode:'cors',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          } 

        }).then(res=>res.json())
        .then(data=>console.log(data));
          
    }





    return (
        <div className="joinOuterContainer">
         <div className="joinInnerContainer">
           <h1 className="heading">Join</h1>
           <div> <input placeholder="Name" className="joinInput" type="text" onChange={(event=>{setName(event.target.value)})}  /></div>
           <div> <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event=>{setRoom(event.target.value)})}  /> </div>
           
           <Link onClick={myFunction}  to={`/chat?name=${name}&room=${room+":"+url}`}>
               <button className="buttn bhagwa mt-20">Join Room</button>
           </Link>

         </div>

        </div>
    )
}

export default Join;