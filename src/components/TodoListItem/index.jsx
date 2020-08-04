import React, { Component } from 'react';

class TodoListItem extends Component{
    
    render() {
        return (
            <div>
                <label
                    style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }} >
                    { this.props.item.content }
                </label>
                <button onClick={this.props.handleDelete}>X</button>
            </div>
        );
    }
}

export default TodoListItem;
