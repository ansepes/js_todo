import { connect } from 'react-redux';
import InputForm from '../components/inputForm';
import { addTodo } from '../actions/todo-actions';

const mapDispatchToProps = dispatch => ({
  submitAction: (e, inputNode, resetInput) => {
    e.preventDefault();
    if (!inputNode.value.trim()) {
      return;
    }
    dispatch(addTodo(inputNode.value));
    resetInput();
  },
  actionLabel: 'Add Todo',
});

export default connect(null, mapDispatchToProps)(InputForm);

