/* eslint-disable no-console */

import Immutable from 'immutable';
import { ADD_TODO } from '../actions/todo-actions';
import { TOGGLE_TODO } from '../actions/toggle-actions';

const initialState = Immutable.Map({
  message: '',
  last_id: 0,
  todos: [],
});

function createTodo(message, id, completed) {
  return {
    message,
    id,
    completed,
  };
}

function addNewTodo(state, message) {
  const newId = state.getIn(['last_id']) + 1;
  const newTodo = createTodo(message, newId, false);
  return state.set('todos', [newTodo, ...state.getIn(['todos'])])
              .set('last_id', newId);
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addNewTodo(state, action.payload.message);
    case TOGGLE_TODO:
      return state.set('todos', state.getIn(['todos']).map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return createTodo(todo.message, todo.id, !todo.completed);
      }));
    default:
      return state;
  }
};

export default todoReducer;
