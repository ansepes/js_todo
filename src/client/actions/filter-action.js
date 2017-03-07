// @flow
import { createAction } from 'redux-actions';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const FILTER_TYPE_ALL = 'FILTER_TYPE_ALL';
export const FILTER_TYPE_COMPLETED = 'FILTER_TYPE_COMPLETED';
export const FILTER_TYPE_ACTIVE = 'FILTER_TYPE_ACTIVE';

export const visiblityFilter = createAction(SET_VISIBILITY_FILTER, filter => ({
  filter,
}));
