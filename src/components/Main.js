import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Room from './Room/Room';
import Footer from './Footer/Footer';
import Join from './Join/Join';
import DashboardPage from './Dashboard/Dashboard';
import Settings from './Settings/Settings.js';
import './styles.css'
class Main extends Component {


  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  componentWillMount() {

    fetch("https://streax-app.herokuapp.com/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data.user });
      });

  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/settings" component={Settings} />
          <Route path="/room" component={Room} />
          <Route path="/join" component={() => <Join user={this.state.user} />} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    )
  }


}
export default Main;