import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTodoItem, putTodoItem, storeTodoItems} from '../../actions'
import TodoListItem from '../TodoListItem';
import {getTodos} from "../../apis/todoList";
import TodoMenu from "../TodoMenu";
import {List} from "antd";

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
                <TodoMenu />
                <List style={{marginTop: '20px'}} itemLayout="horizontal"
                      dataSource={this.props.items} bordered
                      renderItem={item => (
                          <List.Item>
                              <TodoListItem key={item.id} item={item}
                                            handleChange={() => this.props.changeTodoItemStatus({
                                                id: item.id,
                                                status: !item.status
                                            })}
                                            handleDelete={() => this.props.deleteTodoItem({id: item.id})}/>
                          </List.Item>)}/>
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
