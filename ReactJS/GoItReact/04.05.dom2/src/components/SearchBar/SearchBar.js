import React from 'react';

const SearchBar = ({ onChange }) => (
  <input type="text" className="input" onChange={onChange} />
);

export default SearchBar;
