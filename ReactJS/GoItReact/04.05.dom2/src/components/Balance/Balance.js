import React from 'react';

const Balance = ({ balance, outcome, income }) => (
  <section className="balance">
    <span>⬆️{income}$</span>
    <span>⬇️{outcome}$</span>
    <span>Balance:{balance}$</span>
  </section>
);
export default Balance;
