import React from 'react';

import PropTypes from 'prop-types';

const Counter = ({ count, items }) => (
  <p>
    {count + 1}/{items.length}
  </p>
);
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Counter;
