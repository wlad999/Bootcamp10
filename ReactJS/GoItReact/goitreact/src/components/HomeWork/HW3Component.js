import React from 'react';

const PricingItem = ({ el }) => (
  <>
    <div className="pricing-item">
      <i className="icon">
        <img src={el.icon} />
      </i>
      <h2 className="label">{el.label}</h2>
      <p className="capacity">{el.capacity}</p>
      <p className="description">{el.description}</p>
      <p className="price">{el.price}</p>
      <button className="button">Get Started</button>
    </div>
  </>
);

export default PricingItem;
