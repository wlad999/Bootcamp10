import React, { Component } from 'react';
import Reader from './Reader/Reader';
import publications from './items.json';
import arrOfmovies from './movies.json';
import MoviePage from './MoviePage/MoviePage';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Reader items={publications} />
        <MoviePage movies={arrOfmovies} />
        <Dashboard />
      </>
    );
  }
}

export default App;
