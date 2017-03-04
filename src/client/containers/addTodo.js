import { connect } from 'react-redux';
import InputForm from '../components/inputForm';
import { addTodo } from '../actions/todo-actions';

const mapDispatchToProps = dispatch => ({
  submitAction: (e, inputNode) => {
    e.preventDefault();
    if (!inputNode.value.trim()) {
      return;
    }
    dispatch(addTodo(inputNode.value));
  },
  actionLabel: 'Add Todo',
  needResetOnAfterSubmit: true,
});

export default connect(null, mapDispatchToProps)(InputForm);

