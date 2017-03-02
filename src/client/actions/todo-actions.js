// @flow
import { createAction } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';

let nextTodoId = 0;

function payload(text) {
  nextTodoId += 1;
  return { text, id: nextTodoId };
}
export const addTodo = createAction(ADD_TODO, payload);



