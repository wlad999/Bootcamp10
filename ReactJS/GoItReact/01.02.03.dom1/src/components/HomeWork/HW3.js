import React from 'react';
import PricingItem from './HW3Component';

const PricingPlan = ({ items }) => (
  <ul className="pricing-plan">
    {items.map(el => (
      <li className="item">
        <PricingItem el={el} />
      </li>
    ))}
  </ul>
);

export default PricingPlan;
