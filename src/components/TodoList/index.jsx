import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoListInput from './../TodoListInput';
import TodoListItem from './../TodoListItem';
import {deleteTodoItem, storeTodoItems} from './../../actions'
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
          this.props.items.map(item => <TodoListItem key={item.id} item={item}
                          handleDelete={() => this.props.deleteTodoItem({id: item.id})} />)
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

const mapDispatchToProps = (dispatch) => {
  return {
    storeTodoItems,
    deleteTodoItem: ({id}) => {
      dispatch(deleteTodoItem({id}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
