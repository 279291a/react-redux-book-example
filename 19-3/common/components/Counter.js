import React, { PropTypes } from 'react';

export default function Counter({ increment, incrementAsync, decrement, incrementIfOdd, counter }) {
  return (
    <p>
      <img
        alt="counter"
        src={require('./Counter.png')}
        className={require('./Counter.css').counter}
      />
      clicked {counter} times:
      {'  '}
      <button onClick={increment}>+</button>
      {'  '}
      <button onClick={decrement}>-</button>
      {'  '}
      <button onClick={incrementIfOdd}>increment if odd</button>
      {'  '}
      <button onClick={() => incrementAsync()}>increment Async</button>
    </p>
  );
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};
