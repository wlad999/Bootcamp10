import React, { Component } from 'react';
import axios from 'axios';
import Controls from '../Controls/Controls';
import BookList from '../BookList/BookList';

class Home extends Component {
  state = {
    booksData: {
      items: [],
    },
    input: '',
    select: '',
  };

  // componentDidMount() {
  //   console.log('mount');
  //   // fetch(
  //   //   'https://www.googleapis.com/books/v1/volumes?q=react+subject:computers',
  //   // )

  //   // .then(res => res.json())
  //   // .then(data => console.log('data___:', data));
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=${input}+subject:${select}`,
  //     )
  //     .then(res => res.data)
  //     .then(data => this.setState({ booksData: data }));
  // }

  onChange = e => {
    this.setState({ input: e.target.value });
  };

  onSelect = e => {
    this.setState({ select: e.target.value });
  };

  onClick = e => {
    const { input, select } = this.state;

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${input}+subject:${select}`,
      )
      .then(res => res.data)
      .then(data => this.setState({ booksData: data }));
    setTimeout(() => {
      console.log(this.state.booksData);
      console.log(this.state.booksData.items);
    }, 500);
  };

  render() {
    return (
      <div>
        <div>Home!!!!</div>
        <Controls
          onChange={this.onChange}
          onSelect={this.onSelect}
          onClick={this.onClick}
        />
        <BookList data={this.state.booksData.items || []} />
      </div>
    );
  }
}
export default Home;
