import React from 'react';

const genres = [
  'fantasy',
  'thriller',
  'drama',
  'mystery',
  'horror',
  'satire',
  'computers',
];

const Controls = ({ onChange, onClick, onSelect }) => (
  <div>
    <input onChange={onChange} type="text" placeholder="text" />
    <select onSelect={onSelect}>
      {genres.map(el => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
    <button onClick={onClick} type="button">
      Search
    </button>
  </div>
);

export default Controls;
