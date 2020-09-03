import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return this.props.todoCollection
      .sort((a, b) => a.status - b.status)
      .map((todo) => (
          <TodoItem key={todo.id} todo={ todo } statusChanged={this.props.statusChanged} onDelete={this.props.onDelete} />
      ));
  }
}