import React, { useState,useEffect } from 'react'
import ChartSession from './ChartSession'
import ChartTasks from './ChartTasks'
import Friends from './Friends'
import LeaderBoard from './LeaderBoard'
import TotalSessions from './TotalSessions'
import TotalTasks from './TotalTasks'
import WeatherCard from './WeatherCard'
import WelcomeText from './WelcomeText'

export default function MainPage(props) {

    

//here i want to retrive data of user exactly as it is from database/knowing userID
const [user,setUser]=useState('')
    
    
    
useEffect(()=>{
fetch('https://streax-app.herokuapp.com/auth/userData',{
method: "GET",
credentials: "include",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Credentials": true
}
})
.then(res=>res.json())
.then(data=>setUser(data.user));
},[])
   
console.log(user);

var mehfil=0,mehfilC=[];
if(user.mehfil!=undefined){mehfil=user.mehfil.length;mehfilC=user.mehfil}


var friends=0;
if(user.friends!==undefined){friends=user.friends.length;}


var tasks=0,taskC=[];
if(user.taskCompleted!==undefined){tasks=user.taskCompleted.length;taskC=user.taskCompleted}






    
return (
<div className="container-fluid page-body-wrapper">
   <div className="main-panel">

    <WelcomeText name={props.name}></WelcomeText>
       <div className="row">
           <WeatherCard city={props.city}></WeatherCard>

           <div className="col-md-6 grid-margin transparent ">

             <div className="row">
               <TotalTasks tasks={tasks}></TotalTasks> 
               <TotalSessions mehfil={mehfil}></TotalSessions>  
             </div>

             <div className="row">
              <Friends friends={friends}></Friends> 
             </div>


          </div>

       </div>


       <div className="row">
           <ChartTasks tasks={taskC}></ChartTasks>
           <ChartSession mehfil={mehfilC}></ChartSession>
       </div>

       <div className="row">
           <LeaderBoard></LeaderBoard>
       </div>


   </div>


</div>



)
}
