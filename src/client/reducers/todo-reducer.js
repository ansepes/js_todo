import Immutable from 'immutable';
import { ADD_TODO } from '../actions/todo-actions';

const initialState = Immutable.Map({
  message: '',
  id: 0,
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.set('message', action.payload.message);
    default:
      return state;
  }
};

export default todoReducer;
