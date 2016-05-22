import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './todo-app.js';

window.App = {
  render: () => {
    ReactDom.render(
        <TodoApp />,
        document.getElementById('root')
    );
  }
};
