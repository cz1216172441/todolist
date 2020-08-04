import React, { Component } from 'react';
import { addTodoItem } from '../../actions';
import { connect } from 'react-redux';

class TodoListInput extends Component{

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.ref = React.createRef();
    }

    handleInputChanged = (event) => {
        this.setState({
            text: event.target.value
        });       
    }

    handleClick = () => {
        if(this.ref.current.value.trim() !== ""){          
            const item = {
                text: this.state.text,
                done: false
            }
            this.props.addTodoItem(item);
            this.ref.current.value = ""
        } else {
            alert("Please input todo item!");
        }
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.ref} onChange={this.handleInputChanged} />
                <button onClick = {this.handleClick}>ADD</button>
            </div>
        );
    }
}

export default connect(null, { addTodoItem })(TodoListInput);
