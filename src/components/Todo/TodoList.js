import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e) {
		if (this._inputElement.value !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			this._inputElement.value = "";
		}
		
		e.preventDefault();
	}
	deleteItem(key,text) {
		
		fetch('http://localhost:4000/completeTasks',{
			method: "POST",
            credentials: "include",
            body: JSON.stringify({
                task:text
              }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
		}).then(res=>res.json())
		.then(data=>console.log(data));
		

	  var filteredItems = this.state.items.filter(function (item) {
		return (item.key !== key);
	  });

	   this.setState({
		items: filteredItems
	  });
	 

		
	}
    

	


	render() {
		return (
			<div className="todoListMain">
				<div className="todo-header"> <div className="todo-h1"><h3> TODO LIST</h3></div>
					<form className="todo-form" onSubmit={this.addItem}>
						<input className="w-70 inpu" ref={(a) => this._inputElement = a} placeholder="enter task">
						</input>
						<button className="w-20" type="submit">add</button>
					</form>
					<TodoItems entries={this.state.items} delete={this.deleteItem} />
				</div>
			</div>
		);
	}
}

export default TodoList;
