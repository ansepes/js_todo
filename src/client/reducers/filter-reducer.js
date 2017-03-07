import Immutable from 'immutable';
import { SET_VISIBILITY_FILTER, FILTER_TYPE_ALL } from '../actions/filter-action';

const initialState = Immutable.Map({
  filter: FILTER_TYPE_ALL,
});

const visibleFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return state.set('filter', action.payload.filter);
    default:
      return state;
  }
};

export default visibleFilterReducer;
