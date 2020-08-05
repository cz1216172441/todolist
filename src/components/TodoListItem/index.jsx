import React, {Component} from 'react';
import {Button, Col, Row} from "antd";


class TodoListItem extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={16} >
                        <label onClick={this.props.handleChange}
                               style={{textDecorationLine: this.props.item.status ? 'line-through' : 'none'}}>
                            {this.props.item.content}
                        </label>
                    </Col>
                    <Col span={4} >
                        <Button type={"link"} onClick={this.props.handleDelete}>X</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TodoListItem;
