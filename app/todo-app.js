import React, {Component} from 'react';
import TodoCreator from './todo-creator.js';
import TodoList from './todo-list.js';

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
    }

    handleClick() {
      this.setState({

      });
    }

    render() {
      return (
          <div>
            <TodoCreator />
            <TodoList />
          </div>
      );
    }
  }
}

