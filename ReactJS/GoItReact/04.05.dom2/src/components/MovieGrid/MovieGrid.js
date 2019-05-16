import React from 'react';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

const MovieGrid = ({ items }) => (
  <div className="movie-grid">
    {items.map(el => (
      <MovieGridItem data={el} />
    ))}
  </div>
);

export default MovieGrid;
