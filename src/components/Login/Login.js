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
                                                
    toggleSign(){
        if(this.state.cls === "container-login"){
            this.setState({
                cls: "container-login right-panel-active",
            });    
        }
        else{
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
                        <h1 className="h1">Create Account</h1>
                        <div className="social-container">
                            <a href="http://localhost:5000/auth/facebook" className="social a"><i className="fab fa fa-google"></i></a>
                        </div>
                        <span className="span">or use your email for registration</span>
                        <input className="input" type="text" placeholder="Name" name="UserName" required value="" />
                        <input className="input" type="email" placeholder="Email" name="Email" required value=""/>
                        <input className="input" type="password" placeholder="Password" name="Password" required value=""/>
                        <button className="button">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="/SignIn" className="form" method="post">
                        <h1 className="h1">Sign in</h1>
                        <div className="social-container">
                            <a href="http://localhost:5000/auth/facebook" className="social a"><i className="fab fa fa-google"></i></a>
                        </div>
                        <span className="span">or use your account</span>
                        <input className="input" type="email" placeholder="Email" name="Email" required value=""/>
                        <input className="input" type="password" placeholder="Password"  name="Password" required value=""/>
                        <a href="/" className="a">Forgot your password?</a>
                        <button className="button">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel bhagwa overlay-left">
                            <h1 className="h1">Welcome Back!</h1>
                            <p className="p">To keep connected with us please login with your personal info</p>
                            <button className="ghost button" onClick={this.toggleSign} id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel bhagwa overlay-right">
                            <h1 className="h1">Hello, Friend!</h1>
                            <p className="p">Enter your personal details and start journey with us</p>
                            <button className="ghost button" onClick={this.toggleSign} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Login;