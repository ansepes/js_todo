import { connect } from 'react-redux';
import List from '../components/list';
import { toggleTodo } from '../actions/toggle-actions';

const mapStateToProps = state => ({
  items: state.getIn(['todos', 'todos']),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
