import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement, incrementIfOdd, incrementAsync } from '../actions';

function Counter({ counter, dispatch }) {
  return (
    <p>clicked:
      {counter}  times
      {'  '}
      <button onClick={() => dispatch(onIncrement())}>+</button>
      {'  '}
      <button onClick={() => dispatch(onDecrement())}>-</button>
      {'  '}
      <button onClick={() => dispatch(incrementIfOdd())}>increment If Odd</button>
      {'  '}
      <button onClick={() => dispatch(incrementAsync())}>increment async</button>
    </p>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  state => ({ counter: state.counter }),
)(Counter);
