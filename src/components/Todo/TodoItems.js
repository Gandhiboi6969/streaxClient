import React, { Component } from "react";
import './TodoItem.css';
class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
	createTasks(item) {
	
		return <li className="todo-li" onClick={() => this.delete(item.key,item.text)} key={item.key}>{item.text}</li>
	}
	delete(key,text) 
	{
		this.props.delete(key,text);
		
		

	}
	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
			<ul className="theList scroll-list">
				{listItems}
			</ul>
		);
	}
};

export default TodoItems;
