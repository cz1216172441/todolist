import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoListInput from './../TodoListInput';
import TodoListItem from './../TodoListItem';
import {deleteTodoItem, achieveTodoItem, storeTodoItems} from './../../actions'
import PropTypes from 'prop-types'
import {getTodos} from "../../apis/todoList";

class TodoList extends Component {

  componentDidMount() {
    getTodos().then(res => {
      const items = res.data ? res.data : [];
      this.props.storeTodoItems(items);
    });
  }

  render() {
    return (
      <div>
        <h2>All TodoList</h2>
        <TodoListInput/>
        {
          this.props.items.map(item =>
            <TodoListItem key={item.id} item={item}
                          handleDelete={this.props.deleteTodoItem}
                          handleAchieve={this.props.achieveTodoItem}/>)
        }
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    items: state.todoListReducer.items
  }
}

export default connect(mapStateToProps, {deleteTodoItem, achieveTodoItem, storeTodoItems})(TodoList);
