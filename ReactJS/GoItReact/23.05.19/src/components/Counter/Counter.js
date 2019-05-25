import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter }) => <div>Counter: {counter}</div>;

const stateToProps = state => ({
  counter: state.counter,
});
export default connect(stateToProps)(Counter);

// export default Counter;
