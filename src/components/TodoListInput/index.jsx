import React, {Component} from 'react';
import {postTodoItem} from '../../actions';
import {connect} from 'react-redux';
import {Input, Row, Col, Button} from 'antd';

class TodoListInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleInputChanged = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    handleClick = () => {
        if (this.state.text.trim() !== '') {
            const item = {
                content: this.state.text,
                status: false
            }
            this.props.addTodoItem(item);
            this.setState({
                text: ''
            })
        } else {
            alert("Please input todo item!");
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16}>
                        <Input type="text" onChange={this.handleInputChanged}
                               value={this.state.text}/>
                    </Col>
                    <Col span={4} style={{marginLeft: '20px'}}>
                        <Button onClick={this.handleClick}>ADD</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoItem: (item) => {
            dispatch(postTodoItem(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoListInput);
