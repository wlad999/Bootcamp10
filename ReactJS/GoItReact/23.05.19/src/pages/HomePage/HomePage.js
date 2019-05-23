import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counterActions';

class HomePage extends Component {
  state = {};

  render() {
    const { counter, onDecrement, onIncrement } = this.props;

    return (
      <div>
        <div>Home page</div>
        <button onClick={onIncrement} type="button">
          +
        </button>
        <span>{counter}</span>
        <button onClick={onDecrement} type="button">
          -
        </button>
      </div>
    );
  }
}
const stateToProps = state => ({
  counter: state.counter,
});
const dispathToProp = dispatch => ({
  onIncrement() {
    dispatch(increment());
  },
  onDecrement() {
    dispatch(decrement());
  },
});

export default connect(
  stateToProps,
  dispathToProp,
)(HomePage);
