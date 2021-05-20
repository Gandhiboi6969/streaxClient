import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cls: "container-login"
        };

        this.toggleSign = this.toggleSign.bind(this);

    }

    toggleSign() {
        if (this.state.cls === "container-login") {
            this.setState({
                cls: "container-login right-panel-active",
            });
        }
        else {
            this.setState({
                cls: "container-login",
            });
        }
    }

    render() {
        return (
            <div className="login mt-4">
                <div className={this.state.cls} id="container-login">
                    <div className="form-container sign-up-container">
                        <form action="/register" className="form" method="post">
                            <h1 className="h1">Sign In</h1>
                            <a href="https://streax-app.herokuapp.com/auth/google" className="btn btn-block text-white social-button">
                                <span className="fa fa-google "></span>
                            </a>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="/SignIn" className="form" method="post">
                            <h1 className="h1">Sign In </h1>
                            <a href="https://streax-app.herokuapp.com/auth/facebook" className="btn btn-block text-white social-button">
                                <span className="fa fa-facebook "></span>
                            </a>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel bhagwa overlay-left">
                                <h1 className="h1">We got you covered!</h1>
                                <p style={{color:'white'}} className="p">Connect with Google!</p>
                                <button className="ghost button" onClick={this.toggleSign} id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel bhagwa overlay-right">
                                <h1 className="h1">Hello, Friend!</h1>
                                <p style={{color:'white'}} className="p">Don't have a facebook account</p>
                                <button className="ghost button" onClick={this.toggleSign} id="signUp">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;