import React, { Component } from 'react';
import './App.css';
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import About from './components/About';

class ToDo {
  constructor(title = null) {
      this.title = title || "";
  }
  
  title = "";
  id = uuid();
  status = false;
}


class App extends Component {
  state = {
    todoCollection: [
      new ToDo("Wash the dishes"),
      new ToDo("Feed the cat")
    ]
  };

  statusChanged = (targetedTodo, event) => {
    const toStatus = event.target.checked;
    this.setState({ todoCollection: this.state.todoCollection.map(todo => {
      if(todo.id === targetedTodo.id) {
        todo.status = toStatus;
      }
      return todo;
    }) });
  }


  onDelete = (targetedTodoId) => {
    this.setState({  todoCollection: [...this.state.todoCollection.filter(todo => todo.id !== targetedTodoId)]});
  }

  addTodo = (todoTitle) => {
    this.setState({  todoCollection: [...this.state.todoCollection, new ToDo(todoTitle)]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <TodoList todoCollection={this.state.todoCollection} statusChanged={this.statusChanged} onDelete={this.onDelete} />
                </React.Fragment>
              )}
            />
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
  
}

export default App;
