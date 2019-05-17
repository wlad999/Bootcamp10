import React from 'react';

const ControlsH3 = ({ onChange, onClick }) => (
  <section className="controls">
    <input type="number" onChange={onChange} />
    <button onClick={onClick} type="button">
      Deposit
    </button>
    <button onClick={onClick} type="button">
      Withdraw
    </button>
  </section>
);

export default ControlsH3;
