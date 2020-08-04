import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListInput from './../TodoListInput';
import TodoListItem from './../TodoListItem';
import { deleteTodoItem, achieveTodoItem } from './../../actions'
import PropTypes from 'prop-types'

class TodoList extends Component{

    render() {
        return (
            <div>
                <h2>All TodoList</h2>
                <TodoListInput />
                {
                    this.props.items.map((item, index) => 
                        <TodoListItem key={index} index={index} item={item}
                            handleDelete={this.props.deleteToDoItem}
                            handleAchieve={this.props.achieveTodoItem} />)
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

export default connect(mapStateToProps, { deleteToDoItem: deleteTodoItem, achieveTodoItem })(TodoList);
