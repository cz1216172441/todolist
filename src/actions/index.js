import {createAction} from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes';

export const storeTodoItems = createAction(types.STORE_TODO_ITEM, (items) => ({ payload: items }));
export const addTodoItem = createAction(types.ADD_TODO_ITEM, ({text, done}) => ({ payload: {text: text, done: done} }));
export const deleteTodoItem = createAction(types.DELETE_TODO_ITEM, (index) => ({ payload: index }));
export const achieveTodoItem = createAction(types.ACHIEVE_TODO_ITEM, (index) => ({ payload: index }));
