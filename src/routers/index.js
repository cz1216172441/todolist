import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import TodoListPage from './../components/TodoListPage';
import FinishedTodoListPage from './../components/FinishedTodoListPage';

const Router = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Route exact path="/" component={TodoListPage}/>
            <Route exact path="/finished" component={FinishedTodoListPage}/>
        </HashRouter>
    </Provider>
)

Router.propTypes = {
    store: PropTypes.object.isRequired
}

export default Router