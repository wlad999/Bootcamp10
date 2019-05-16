import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className="controls">
    <button type="button" onClick={onDecrement} className="button">
      Назад
    </button>
    <button type="button" onClick={onIncrement} className="button">
      Вперед
    </button>
  </section>
);
Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
