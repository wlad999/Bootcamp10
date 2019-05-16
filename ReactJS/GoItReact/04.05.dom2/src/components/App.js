import React, { Component } from 'react';
import Reader from './Reader/Reader';
import publications from './items.json';
import arrOfmovies from './movies.json';
import MoviePage from './MoviePage/MoviePage';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Reader items={publications} />
        <MoviePage movies={arrOfmovies} />
      </>
    );
  }
}

export default App;
