import { connect } from 'react-redux';
import Item from '../components/listItem';

const mapStateToProps = state => ({
  message: state.getIn(['todos', 'id']) === 0 ? '' : `ID:${state.getIn(['todos', 'id'])}, Message:${state.getIn(['todos', 'message'])}`,
});

export default connect(mapStateToProps)(Item);
