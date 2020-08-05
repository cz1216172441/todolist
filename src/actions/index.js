import {createAction} from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes';
import {deleteTodos, getTodos, postTodos, putTodos} from "../apis/todoList";

export const storeTodoItems = createAction(types.STORE_TODO_ITEM, (items) => ({ payload: items }));

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

export const deleteTodoItem = ({id}) => {
  return (dispatch) => {
    deleteTodos({id}).then(res => {
      if (res.status === 200) {
        dispatch(getTodoItem());
      }
    })
  }
}

export const putTodoItem = (items) => {
  return (dispatch) => {
    putTodos(items).then(res => {
      if (res.status === 200) {
        dispatch(getTodoItem());
      }
    })
  }
}
