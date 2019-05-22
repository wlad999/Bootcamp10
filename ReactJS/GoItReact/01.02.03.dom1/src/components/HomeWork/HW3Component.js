import React from 'react';
import PropTypes from 'prop-types';

const PricingItem = ({ el }) => (
  <>
    <div className="pricing-item">
      <i className="icon">
        <img src={el.icon} alt="icon" />
      </i>
      <h2 className="label">{el.label}</h2>
      <p className="capacity">{el.capacity}</p>
      <p className="description">{el.description}</p>
      <p className="price">{el.price}</p>
      <button className="button" type="submit">
        Get Started
      </button>
    </div>
  </>
);
PricingItem.propTypes = {
  el: PropTypes.shape.isRequired,
};

export default PricingItem;
