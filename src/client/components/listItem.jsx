/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';

const ListItem = ({ message,
                    showLineThrough,
                    onClick }: { message: String,
                                 showLineThrough: Boolean,
                                 onClick: Function }) =>
 (
   <li onClick={onClick} style={{ textDecoration: showLineThrough ? 'line-through' : 'none' }}>
     {message}
   </li>
);

ListItem.propTypes = {
  message: PropTypes.string.isRequired,
  showLineThrough: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
