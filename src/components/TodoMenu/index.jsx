import React, {Component} from 'react';
import {Menu} from "antd";
import {NavLink} from "react-router-dom";

class TodoMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'horizontal',
            current: 'todoList'
        }
    }

    handleClick = () => {
        this.setState({
            current: this.state.current === 'todoList' ? 'finishedTodoList' : 'todoList'
        })
    }

    render() {
        return (
            <div>
                <Menu mode={this.state.mode}
                      selectedKeys={this.state.current}
                      onClick={this.handleClick}>
                    <Menu.Item key={"todoList"}>
                        <NavLink exact
                                 style={{fontSize: '24px', marginRight: '10px'}}
                                 to="/">All TodoList</NavLink>
                    </Menu.Item>
                    <Menu.Item key={"finishedTodoList"}>
                        <NavLink exact
                                 style={{fontSize: '24px', marginLeft: '10px'}}
                                 to="/finished">Finished TodoList</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }

}

export default TodoMenu;
