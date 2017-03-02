import Immutable from 'immutable';
import { ADD_TODO } from '../actions/todo-actions';

const initialState = Immutable.Map({
  text: '',
  id: 0,
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.set('id', action.payload.id)
                  .set('text', action.payload.text);
    default:
      return state;
  }
};

export default todoReducer;
