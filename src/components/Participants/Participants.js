import React, { Component} from 'react'


class Participants extends Component {
    
  
  constructor(props) {
    super(props)

    this.state = { //state is by default an object
      participants: [
         
      ]
   }
}
  
componentWillMount() {
    
    fetch(`http://localhost:4000/participants`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            roomName:this.props.room,
           
          }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then(res=>res.json())
        .then(data=>{this.setState({participants:data.participants})
    })

     
}
renderTableData() {
  return this.state.participants.map((participant, i) => {
     const {name,_id} = participant //destructuring
     console.log(name);
     return (
        <tr style={{color:'black',fontWeight: "bold",fontSize:'20px'}} key={i}>
           {name}
        </tr>
     )
  })
}
  


 

  render(){
    
   
   return (
    <div className="align-item-center">

    <div className="col-12 ">

        <div className="card-header">
            <h3 style={{ textAlign: "center" }}>Participants</h3>
        </div>
        <div className="card-body">
            {this.renderTableData()}
        </div>
    </div>
</div>
    )
  }
}


export default Participants;