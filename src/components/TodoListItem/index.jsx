import React, { Component } from 'react';

class TodoListItem extends Component{
    
    render() {
        return (
            <div>
                <label onClick={() => this.props.handleAchieve(this.props.index)} 
                    style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }} >
                    { this.props.item.content }
                </label>
                <button onClick={() => this.props.handleDelete(this.props.index)}>X</button>
            </div>
        );
    }
}

export default TodoListItem;
