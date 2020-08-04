import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './todoListReducer';

export default configureStore({
    reducer: {
        todoListReducer
    }
})
