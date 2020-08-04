import React, { Component } from 'react';

class TodoListItem extends Component{

    constructor(props){
        super(props);
        this.state = { done : false};
    }
    
    render() {
        return (
            <div>
                <label onClick={() => this.props.handleAchieve(this.props.index)} 
                    style={{ textDecorationLine: this.props.item.done ? 'line-through' : 'none' }} >
                    { this.props.item.text }
                </label>
                <button onClick={() => this.props.handleDelete(this.props.index)}>X</button>
            </div>
        );
    }
}

export default TodoListItem;
