import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return this.props.todoCollection.map((todo) => (
        <TodoItem key={todo.id} todo={ todo } />
    ));
  }
}