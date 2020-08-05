import { createReducer } from '@reduxjs/toolkit'
import {DELETE_TODO_ITEM, ADD_TODO_ITEM, ACHIEVE_TODO_ITEM, STORE_TODO_ITEM} from '../constants/actionTypes'

const initState = {
    items: []
}

export default createReducer(initState, {
    [STORE_TODO_ITEM]: (state, action) => ({items: action.payload}),
    [ADD_TODO_ITEM]: (state, action) => ({items: [...state.items, action.payload ]}),
    [DELETE_TODO_ITEM]: (state, action) => ({items: state.items.filter((item, index) => action.payload !== index)}),
    [ACHIEVE_TODO_ITEM]: (state, action) => ({
        items: state.items.map((item, index) => {
            if (index === action.payload) {
                return {text: item.text, done: !item.done}
            }
            return item
        })
    })
})
