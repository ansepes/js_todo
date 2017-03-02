import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import todoReducer from './reducers/todo-reducer';
import App from './components/app';

const store = createStore(combineReducers({
  dog: todoReducer,
}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app'),
);
