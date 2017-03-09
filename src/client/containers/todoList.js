import { connect } from 'react-redux';
import List from '../components/list';
import { toggleTodo } from '../actions/toggle-actions';
import { FILTER_TYPE_ALL, FILTER_TYPE_COMPLETED, FILTER_TYPE_ACTIVE } from '../actions/filter-action';

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter((t) => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter((t) => !t.completed)
//   }
// }

const getVisibleTodos = (state) => {
  const filter = state.getIn(['filters', 'filter']);
  const todos = state.getIn(['todos', 'todos']);

  switch (filter) {
    case FILTER_TYPE_ALL:
      return todos;
    case FILTER_TYPE_ACTIVE:
      return todos.filter(t => !t.completed);
    case FILTER_TYPE_COMPLETED:
      return todos.filter(t => t.completed);
    default:
      return [];
  }
};

const mapStateToProps = state => ({
  items: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
