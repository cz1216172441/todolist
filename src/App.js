import React, {Component} from 'react';
import './App.css';
import ToDoList from './components/TodoList'
import {connect} from 'react-redux';
import Router from './routers';
import 'antd/dist/antd.css';
import {Spin} from "antd";

class App extends Component {

    render() {
        return (
            <div style={{width: '80%', margin: '0 auto'}}>
                <Spin spinning={this.props.loading}
                      size="large"
                      tip="Loading...">
                    <Router>
                        <div className="App" >
                            <ToDoList />
                        </div>
                    </Router>
                </Spin>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        loading: state.loadingReducer.loading
    }
}

export default connect(mapStateToProps)(App);
