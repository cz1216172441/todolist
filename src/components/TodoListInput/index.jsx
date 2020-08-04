import React, {Component} from 'react';
import {postTodoItem} from '../../actions';
import {connect} from 'react-redux';

class TodoListInput extends Component {

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
    if (this.ref.current.value.trim() !== "") {
      const item = {
        content: this.state.text,
        status: false
      }
      this.props.addTodoItem(item);
      this.ref.current.value = "";
    } else {
      alert("Please input todo item!");
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.ref} onChange={this.handleInputChanged}/>
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoItem: (item) => {
      dispatch(postTodoItem(item));
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoListInput);
