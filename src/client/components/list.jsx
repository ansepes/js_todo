import React, { PropTypes } from 'react';
import ListItem from './listItem';

function createMessage(todo) {
  return `ID:${todo.id}, Message:${todo.message}`;
}

const List = ({ items }: {items: Array}) => (
  <ul>
    {items.map(todo =>
      <ListItem
        key={todo.id}
        message={createMessage(todo)}
      />,
    )}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired)
  .isRequired,
};

export default List;
