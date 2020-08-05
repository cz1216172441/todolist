import {configureStore} from '@reduxjs/toolkit';
import todoListReducer from './todoListReducer';
import thunk from 'redux-thunk';
import loadingReducer from "./loadingReducer";

export default configureStore({
  reducer: {
    todoListReducer,
    loadingReducer
  },
  middleware: [thunk]
})
