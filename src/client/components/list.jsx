import React, { PropTypes } from 'react';
import ListItem from './listItem';

function createMessage(todo) {
  return `ID:${todo.id}, Message:${todo.message}`;
}

const List = ({ items, onTodoClick }: {items: Array, onTodoClick: Function}) => (
  <ul>
    {items.map(todo =>
      <ListItem
        key={todo.id}
        message={createMessage(todo)}
        showLineThrough={todo.completed}
        onClick={() => onTodoClick(todo.id)}
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
  onTodoClick: PropTypes.func.isRequired,
};

export default List;
