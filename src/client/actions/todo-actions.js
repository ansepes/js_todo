// @flow
import { createAction } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = createAction(ADD_TODO, message => ({
  message,
}));
