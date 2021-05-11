import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Join from './Join/Join';
import Timer from './Timer/Timer';
import Room from './Room/Room';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/login" component={Login}/>
                    {/* <Route path='/join' component={Join} /> */}
                    <Route path='/chat' component={Room} />
                    <Route path='/join' component={Timer} />
                    {/* <Route path='/room' component={Room} /> */}
                    <Redirect to="/login" />
                </Switch>
                <Footer />
            </div>
        )
    }
}  

export default Main;