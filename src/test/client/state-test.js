/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import assert from 'power-assert';
import { describe, it, beforeEach } from 'mocha';
import todoReducer from '../../client/reducers/todo-reducer';
import { addTodo } from '../../client/actions/todo-actions';

let store;

describe('App State', () => {
  describe('todos', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        todos: todoReducer,
      }));
    });
    describe('todos', () => {
      it('should make hasBarked go from false to true', () => {
        assert.equal(store.getState().getIn(['todos', 'todos']).length, 0);
        assert.equal(store.getState().getIn(['todos', 'last_id']), 0);
        store.dispatch(addTodo('hogehoge'));
        assert.equal(store.getState().getIn(['todos', 'todos'])[0].message, 'hogehoge');
        assert.equal(store.getState().getIn(['todos', 'todos'])[0].id, 1);
        assert.equal(store.getState().getIn(['todos', 'last_id']), 1);
      });
    });
  });
});
