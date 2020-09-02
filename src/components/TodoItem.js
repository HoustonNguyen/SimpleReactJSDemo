import React, { Component } from "react";

class TodoItem extends Component {
    render() {
        return (
                <p><input type="checkbox" value={this.props.todo.status}></input> {this.props.todo.title}</p>
        );
    }
}

export default TodoItem;