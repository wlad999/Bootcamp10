import React from 'react';

const MovieGridItem = ({ data }) => (
  <div className="movie-card">
    <img src={data.posterUrl} alt="" />
    <div className="content">
      <h2>{data.title}</h2>
      <p>{data.overview}</p>
    </div>
  </div>
);

export default MovieGridItem;
