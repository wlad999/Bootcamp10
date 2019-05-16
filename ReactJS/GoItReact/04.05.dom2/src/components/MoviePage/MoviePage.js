import React, { Component } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  onChange = e => {
    const { muvies } = this.state;
    console.log(e.target.value);
    const regExp = new RegExp(e.target.value, 'gi');
    console.log('ttt', regExp.test('ttt'));
    // filter element and find matches with regExp
    const newMuvies = muvies;
    this.setState({ muvies: newMuvies });
  };

  render() {
    const { movies } = this.state; /* деструктуризируем весь обїект */
    // const item = items[count];
    return (
      <>
        <div className="container">
          <SearchBar onChange={this.onChange} />
          <MovieGrid items={movies} />
        </div>
      </>
    );
  }
}
// Reader.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       text: PropTypes.string,
//     }),
//   ).isRequired,
// };

export default MoviePage;
