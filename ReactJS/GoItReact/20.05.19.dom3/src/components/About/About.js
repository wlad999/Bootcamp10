import React, { Component } from 'react';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';
import Modal from '../Modal/Modal';
import styles from './About.module.css';

class About extends Component {
  state = {
    booksData: [],
    input: '',
    numberPage: 1,
    modal: '',
  };

  onChange = e => {
    console.log('ON_CHANGE!!!');
    console.log(this.state.input);

    this.setState({ input: e.target.value });
  };

  onClick = url => {
    this.setState({ modal: url });
  };
  closeModal = cl => {
    this.setState({ modal: cl });
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
      .then(data => this.setState({ booksData: data.hits, numberPage: 1 }));
    setTimeout(() => {
      console.log(this.state.booksData);
      // console.log(this.state.booksData.hits);
    }, 500);
  };

  loadMore = () => {
    const { input, numberPage } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${numberPage +
          1}&per_page=12&key=12550852-d0b95e897e23878014e7eb64b`,
      )
      .then(res => res.data)
      .then(data =>
        this.setState(state => ({
          booksData: [...state.booksData, ...data.hits],
          numberPage: state.numberPage + 1,
        })),
      );
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
    const { modal } = this.state;
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
        <Gallery onClick={this.onClick} data={this.state.booksData || []} />
        About!!!
        {modal && <Modal url={modal} closeModal={this.closeModal} />}
        <button type="button" onClick={this.loadMore}>
          load more
        </button>
      </div>
    );
  }
}

export default About;
