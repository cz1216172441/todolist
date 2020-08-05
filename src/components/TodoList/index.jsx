import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoListInput from './../TodoListInput';
import TodoListItem from './../TodoListItem';
import {deleteTodoItem, storeTodoItems, putTodoItem} from '../../actions';
import {getTodos} from "../../apis/todoList";
import {List} from "antd";

class TodoList extends Component {

  componentDidMount() {
    getTodos().then(res => {
      if (res.status === 200) {
        this.props.storeTodoItems(res.data);
      }
    });
  }

  render() {
    return (
      <div style={{marginTop: '20px'}}>
        <TodoListInput />
        <List style={{marginTop: '20px'}}  itemLayout="horizontal" dataSource={this.props.items} bordered
              renderItem={item => (
                  <List.Item>
                    <TodoListItem key={item.id} item={item}
                                  handleChange={() => this.props.changeTodoItemStatus({id: item.id, status: !item.status})}
                                  handleDelete={() => this.props.deleteTodoItem({id: item.id})} />
                  </List.Item> )} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todoListReducer.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeTodoItems: (items) => {
      dispatch(storeTodoItems(items))
    },
    deleteTodoItem: ({id}) => {
      dispatch(deleteTodoItem({id}))
    },
    changeTodoItemStatus: ({id, status}) => {
      dispatch(putTodoItem({id, status}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
