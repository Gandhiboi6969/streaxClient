import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

export default function ChartSession(props) {
  
  var monTasks=0,tueTasks=0,wedTasks=0,thurTasks=0,friTasks=0,satTasks=0,sunTasks=0;
  
  

  const [chartData,setchartData]=useState('');

useEffect(()=>{
  if(props!==undefined)
{  
  
  var sessionTask=props.mehfil

  for(var i=0;i<sessionTask.length;i++)
  {                                    
    if(sessionTask[i].day==="1")monTasks++;
    if(sessionTask[i].day==="2")tueTasks++;
    if(sessionTask[i].day==="3")wedTasks++;
    if(sessionTask[i].day==="4")thurTasks++;
    if(sessionTask[i].day==="5")friTasks++;
    if(sessionTask[i].day==="6")satTasks++;
    if(sessionTask[i].day==="0")sunTasks++; 
  }
  
  setchartData({labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
  datasets: [{
    label: 'Sessions Per Day',
    data: [monTasks, tueTasks, wedTasks, thurTasks, friTasks,satTasks,sunTasks],//replace these with props['monday],props['tuesday]....
    backgroundColor: [
        '#94d0cc',
        '#eec4c4',
        '#f29191',
        '#a5e1ad',
        '#a58faa',
        '#c6ffc1'
    ],
    borderColor: [
       '#000'
    ],
    borderWidth: 1
}]
});


}
},[props]) 



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
return (
        <div className="col-md-6 grid-margin stretch-card">
              <div className="card main-chart-card">
                <div className="card-body chart-Card">
                 <div className="d-flex justify-content-between">
                  <p className="card-title h3">Sessions Completed</p>
 
                 </div>
                  <div id="sales-legend" className="chartjs-legend mt-4 mb-2"></div>
                  <Bar
                   
                   data={chartData}

                  />
                </div>
              </div>
        </div>
    )
}
