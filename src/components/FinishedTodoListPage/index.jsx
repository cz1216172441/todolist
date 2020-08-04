import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoItem, achieveTodoItem } from './../../actions'
import TodoListItem from '../TodoListItem';

class FinishedTodoListPage extends Component {

    render() {
        return (
            <div>
                <h2>Finished TodoList</h2>
                {
                    this.props.items.map((item, index) => 
                        <TodoListItem key={index} index={index} item={item}
                            handleDelete={this.props.deleteTodoItem}
                            handleAchieve={this.props.achieveTodoItem} />)
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.todoListReducer.items.filter(item => item.done)
    }
}

export default connect(mapStateToProps, { deleteTodoItem, achieveTodoItem })(FinishedTodoListPage);
