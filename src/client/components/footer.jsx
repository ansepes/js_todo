import React from 'react';
import FilterLink from '../containers/filterLinks';
import { FILTER_TYPE_ALL, FILTER_TYPE_COMPLETED, FILTER_TYPE_ACTIVE } from '../actions/filter-action';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={FILTER_TYPE_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={FILTER_TYPE_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={FILTER_TYPE_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
