import React, { PropTypes } from 'react';

export default function Counter({ value, onDecrement, onIncrement, undo, redo }) {
  return (
    <p>clicked:
      {value}times
      {'  '}
      <button onClick={onIncrement}>+</button>
      {'  '}
      <button onClick={onDecrement}>-</button>
      {'  '}
      <button onClick={undo}>undo</button>
      {'  '}
      <button onClick={redo}>redo</button>
    </p>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
};
