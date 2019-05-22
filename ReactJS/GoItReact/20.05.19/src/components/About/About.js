import React, { Component } from 'react';
import styles from './About.module.css';
import Gallery from '../Gallery/Gallery';
import axios from 'axios';

class About extends Component {
  state = {
    booksData: [],
    input: '',
    numberPage: 1,
  };

  onChange = e => {
    console.log('ON_CHANGE!!!');
    console.log(this.state.input);

    this.setState({ input: e.target.value });
  };

  // onSelect = e => {
  //   this.setState({ select: e.target.value });
  // };

  fetch = () => {
    const { input, numberPage } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${numberPage}&per_page=12&key=12550852-d0b95e897e23878014e7eb64b`,
      )
      .then(res => res.data)
      .then(data => this.setState({ booksData: data.hits }));
    setTimeout(() => {
      console.log(this.state.booksData);
      // console.log(this.state.booksData.hits);
    }, 500);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.fetch();
    }
  }

  render() {
    return (
      <div>
        <form className={styles['search-form']}>
          <input
            onChange={this.onChange}
            type="text"
            autocomplete="off"
            placeholder="Search images..."
          />
        </form>
        <Gallery data={this.state.booksData || []} />
        About!!!
      </div>
    );
  }
}

export default About;
