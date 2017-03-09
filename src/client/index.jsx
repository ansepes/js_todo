import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import todoReducer from './reducers/todo-reducer';
import visibleFilterReducer from './reducers/filter-reducer';
import AddTodo from './containers/addTodo';
import TodoList from './containers/todoList';
import FooterLink from './components/footer';

const store = createStore(combineReducers({
  todos: todoReducer,
  filters: visibleFilterReducer,
}));

render(
  <Provider store={store}>
    <div>
      <AddTodo />
      <FooterLink />
      <TodoList />
    </div>
  </Provider>,
  document.querySelector('.app'),
);
