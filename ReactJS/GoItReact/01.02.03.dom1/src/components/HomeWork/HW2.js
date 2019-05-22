import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ stats }) => (
  <section className="stats-section">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {stats.map(el => (
        <li className="item">
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
Stats.propTypes = {
  stats: PropTypes.shape.isRequired,
};

export default Stats;
