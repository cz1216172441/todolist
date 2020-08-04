import {createAction} from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes';
import {getTodos, postTodos} from "../apis/todoList";

export const storeTodoItems = createAction(types.STORE_TODO_ITEM, (items) => ({ payload: items }));
export const deleteTodoItem = createAction(types.DELETE_TODO_ITEM, (id) => ({ payload: id }));
export const achieveTodoItem = createAction(types.ACHIEVE_TODO_ITEM, (id) => ({ payload: id }));

const getTodoItem = () => {
  return (dispatch) => {
    getTodos().then(res => {
      if (res.status === 200) {
        dispatch(storeTodoItems(res.data));
      }
    })
  }
}

export const postTodoItem = ({content, status}) => {
  return (dispatch) => {
    postTodos({content, status}).then(res => {
      if (res.status === 201) {
        dispatch(getTodoItem());
      }
    })
  }
}
