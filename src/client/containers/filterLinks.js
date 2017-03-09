import { connect } from 'react-redux';
import { visiblityFilter } from '../actions/filter-action';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.getIn(['filters', 'filter']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(visiblityFilter(ownProps.filter)),
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;

