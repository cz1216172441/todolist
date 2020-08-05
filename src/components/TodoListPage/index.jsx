import React, { Component } from 'react';
import TodoList from './../TodoList'
import TodoMenu from "../TodoMenu";

class TodoListPage extends Component {

    render() {
        return (
            <div>
                <TodoMenu />
                <TodoList />
            </div>
        );
    }

}

export default TodoListPage;
