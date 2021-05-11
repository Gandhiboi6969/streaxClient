import React, { Component } from 'react'

export default class App extends React.Component  {

    constructor(props) {
      super(props);

      this.state = {
        users : [{}]
      };

      this.renderMyData = this.renderMyData.bind(this);

    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData(){
        fetch('/participants')
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ users : responseJson })
            })
            .catch((err) => {
              console.error(err);
            });
    }

    render(){
        
        console.log(this.users);

        return(
            <div>
                <h1>sldh</h1>
                {/* {Object.keys(users).map((obj, i) => <p key={i}>{users[obj].name}</p>)} */}
            </div>
            
        );
    }
}