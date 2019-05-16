import React from 'react';

import PropTypes from 'prop-types';

const Counter = ({ count, items }) => (
  <p>
    {count + 1}/{items.length}
  </p>
);
Counter.propTypes = {
  count: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
};

export default Counter;
