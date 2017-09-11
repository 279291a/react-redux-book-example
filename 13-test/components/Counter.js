import React, { PropTypes } from 'react';

export default function Counter({ counter, onDecrement, onIncrement, incrementIfOdd, incrementAsync }) {
  return (
    <p>clicked:
      {counter}times
      {'  '}
      <button onClick={onIncrement}>+</button>
      {'  '}
      <button onClick={onDecrement}>-</button>
      {'  '}
      <button onClick={incrementIfOdd}>undo</button>
      {'  '}
      <button onClick={incrementAsync}>redo</button>
    </p>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
};
