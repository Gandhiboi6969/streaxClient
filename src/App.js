import Main from "./components/Main";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import React, { Component} from 'react'
import Title from  "./components/Navbar/Title"
import FooterComponent from "./components/Footer/Footer";

class App extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isAuth:false  
       }
    }

    componentWillMount()
    { 
        

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
        .then(res=>res.json())
        .then(data=>{
            this.setState({isAuth:true});
        });
    }
   

    render(){
        if(this.state.isAuth === true){
            return (
                <BrowserRouter>
                    <div className="App">
                        <Main user={this.state.user}/>
                    </div>
                </BrowserRouter>
            );
            
        }
        else{
            return (
                <BrowserRouter>
                    <div className="App">
                       <Title/>
                       <Switch>
                           <Route path='/' component={Login}></Route>
                           <Redirect to='/'></Redirect>
                       </Switch>
                       <FooterComponent></FooterComponent>
                    </div>
                </BrowserRouter>
            );
        }

    }

    


}


export default App;
