import React, { Component } from 'react';
import './App.css';
import { v4 as uuid } from "uuid";

import { TodoList } from "./components/TodoList";

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


  render() {
    return (
      <TodoList todoCollection={this.state.todoCollection} />
    );
  }
  
}

export default App;
