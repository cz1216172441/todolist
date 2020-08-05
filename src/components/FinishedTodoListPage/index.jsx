import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteTodoItem, storeTodoItems, putTodoItem} from '../../actions'
import TodoListItem from '../TodoListItem';
import {getTodos} from "../../apis/todoList";

class FinishedTodoListPage extends Component {

    componentDidMount() {
        getTodos().then(res => {
            if (res.status === 200) {
                this.props.storeTodoItems(res.data);
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Finished TodoList</h2>
                {
                    this.props.items.map((item, index) => 
                        <TodoListItem key={index} index={index} item={item}
                                      handleChange={() => this.props.changeTodoItemStatus({id: item.id, status: !item.status})}
                                      handleDelete={() => this.props.deleteTodoItem({id: item.id})} />)
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.todoListReducer.items.filter(item => item.status)
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

export default connect(mapStateToProps, mapDispatchToProps)(FinishedTodoListPage);
