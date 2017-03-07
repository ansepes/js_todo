// @flow
import { createAction } from 'redux-actions';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = createAction(TOGGLE_TODO, id => ({
  id,
}));
