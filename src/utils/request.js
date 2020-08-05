import axios from 'axios'
import store from '../reducers'
import {LOADING_TOGGLE} from "../constants/actionTypes";

const service = axios.create({
    baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io',
    timeout: 60000
});

service.interceptors.request.use(req => {
    store.dispatch({type: LOADING_TOGGLE, payload: {loading: true}});
    return req;
}, error => error);

service.interceptors.response.use(req => {
    store.dispatch({type: LOADING_TOGGLE, payload: {loading: false}});
    return req;
}, error => error);

export default service;