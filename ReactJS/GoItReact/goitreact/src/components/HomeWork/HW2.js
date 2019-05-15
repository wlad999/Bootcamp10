import React from 'react';

const Stats = ({ stats }) => (
  <section class="stats-section">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      {stats.map(el => (
        <li class="item">
          <span class="label">{el.label}</span>
          <span class="percentage">{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Stats;
