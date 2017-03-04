import { connect } from 'react-redux';
import List from '../components/list';

const mapStateToProps = state => ({
  items: state.getIn(['todos', 'todos']),
});

export default connect(mapStateToProps)(List);
