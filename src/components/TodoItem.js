import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        const { todo } = this.props
        return {
          backgroundColor: todo.status ? "rgb(113 199 107)" : "rgb(255 209 153)",
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: todo.status ? "line-through" : "none",
        };
      };

    render() {
        const {todo} = this.props;
        return (
                <p style={this.getStyle()}>
                    <input type="checkbox" value={todo.status} onChange={this.props.statusChanged.bind(this, todo)}></input> 
                    {todo.title}
                    <button className="btn" style={delButtonStyle} onClick={this.props.onDelete.bind(this, todo.id)}>x</button>
                </p>
        );
    }
}

const delButtonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "70px",
    float: "right",
    cursor: "pointer",
    fontWeight: "bolder"
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    statusChanged: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TodoItem;