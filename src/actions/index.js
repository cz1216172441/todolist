import {createAction} from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes';

export const addTodoItem = createAction(types.ADD_TODO_ITEM, ({text, done}) => ({ payload: {text: text, done: done} }));
export const deleteTodoItem = createAction(types.DELETE_TODO_ITEM, (index) => ({ payload: index }));
export const achieveTodoItem = createAction(types.ACHIEVE_TODO_ITEM, (index) => ({ payload: index }));
