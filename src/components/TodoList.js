import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    return this.props.todoCollection
      .sort((a, b) => a.status - b.status)
      .map((todo) => (
          <TodoItem key={todo.id} todo={ todo } statusChanged={this.props.statusChanged} onDelete={this.props.onDelete} />
      ));
  }
}

// PropTypes
TodoItem.propTypes = {
  todoCollection: PropTypes.array.isRequired,
  statusChanged: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoList;