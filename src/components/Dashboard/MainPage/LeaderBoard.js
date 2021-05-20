import React, { Component} from 'react'


class LeaderBoard extends Component {
    
  
  constructor(props) {
    super(props)

    this.state = { //state is by default an object
      students: [
         
      ]
   }
}
  
componentWillMount() {
    
    fetch('http://localhost:4000/leaderboard')
    .then(res=>res.json())
    .then(data=>{
      this.setState({students:data});
    });
}

addFriend(event)
{
  event.preventDefault();

  fetch(`https://streax-app.herokuapp.com/addFriend`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({  
  
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })


}





renderTableData() {
  return this.state.students.map((student, i) => {
     const {firstName, tasks,  mehfil } = student //destructuring
     return (
        <tr key={i}>
           <td style={{color:'black'}}>{firstName} </td>
           <td style={{color:'black'}}>{tasks} </td>
           <td style={{color:'black'}}>{mehfil}</td>
           <td><button className="btn btn-success" onClick={this.addFriend} >Add Friend</button></td>
        </tr>
     )
  })
}
  


 

  render(){
    
   
   return (
        <div className="mb-4 col-md-7 grid-margin stretch-card">
              <div className="card leaderBoard-card">
                <div className="card-body ">
                  <p className="card-title mb-0 h3 pb-2">LeaderBoard</p>
                  <div className="table-responsive">
                    <table className="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>UserName</th>
                          <th>Tasks</th>
                          <th>Sessions Completed</th>
                          <th >Add Friend </th>
                        </tr>  
                      </thead>
                      <tbody>
                      
                      {this.renderTableData()}
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}


export default LeaderBoard;