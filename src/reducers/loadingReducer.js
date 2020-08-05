import {createReducer} from "@reduxjs/toolkit";
import {LOADING_TOGGLE} from "../constants/actionTypes";

const initState = {
    loading: false
}

export default createReducer(initState, {
    [LOADING_TOGGLE]: (state, action) => ({loading: action.payload.loading})
})