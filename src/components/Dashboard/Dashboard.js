import React, { Component } from 'react';
import './Dashboard.css';
import Header from './Headers/Header';
import MainPage from './MainPage/MainPage';


class DashboardPage extends Component {

  // var nTasks=user.taskCompleted.length;

  constructor(props) {
    super(props)

    this.state = {
      user: {},
      city:'Morena'
    }
  }

  componentWillMount() {

    fetch("https://streax-app.herokuapp.com/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        'Access-Control-Allow-Origin':'*'
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data.user });
        this.setState({city:data.user.city});
      });

  }

  render() {

    

    var namei = this.state.user.firstName;
    var friendsi=0;   
    if(this.state.user.friends!=undefined)
    {
      friendsi=this.state.user.friends.length;
    }
    
    var mehfilsi=0;   
    if(this.state.user.mehfil!=undefined)
    {
      mehfilsi=this.state.user.mehfil.length;
    }

    var tasks=0;   
    if(this.state.user.taskCompleted!=undefined)
    {
      tasks=this.state.user.taskCompleted.length;
    }
    
    var userId=this.state.user._id;

    return (
      <div className="Dashboard">
        <Header name={namei} src={this.state.user.image}></Header>
        <MainPage name={namei} tasks={tasks} friends={friendsi} mehfil={mehfilsi} city={this.state.city} id={userId}></MainPage>
      </div>
    );
  }



}

export default DashboardPage;
