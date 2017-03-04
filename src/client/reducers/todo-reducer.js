/* eslint-disable no-console */

import Immutable from 'immutable';
import { ADD_TODO } from '../actions/todo-actions';

const initialState = Immutable.Map({
  message: '',
  last_id: 0,
  todos: [],
});

function createTodo(message, id) {
  return {
    message,
    id,
  };
}

function addNewTodo(state, message) {
  const newId = state.getIn(['last_id']) + 1;
  const newItem = createTodo(message, newId);
  return state.set('todos', [newItem, ...state.getIn(['todos'])])
              .set('last_id', newId);
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addNewTodo(state, action.payload.message);
    default:
      return state;
  }
};

export default todoReducer;
