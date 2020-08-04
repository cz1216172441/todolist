import {configureStore} from '@reduxjs/toolkit';
import todoListReducer from './todoListReducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    todoListReducer
  },
  middleware: [thunk]
})
