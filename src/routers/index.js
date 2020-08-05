import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import TodoListPage from './../components/TodoListPage';
import FinishedTodoListPage from './../components/FinishedTodoListPage';

const Router = () => (
    <HashRouter>
        <Route exact path="/" component={TodoListPage}/>
        <Route exact path="/finished" component={FinishedTodoListPage}/>
    </HashRouter>
);

export default Router;