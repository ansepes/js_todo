import React, { PropTypes } from 'react';

const ListItem = ({ message }: { message: string }) => <li>{message}</li>;

ListItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ListItem;
