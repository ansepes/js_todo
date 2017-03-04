import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import todoReducer from './reducers/todo-reducer';
import AddTodo from './containers/addTodo';
import TodoList from './containers/todoList';

const store = createStore(combineReducers({
  todos: todoReducer,
}));

render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <TodoList />
    </div>
  </Provider>,
  document.querySelector('.app'),
);
