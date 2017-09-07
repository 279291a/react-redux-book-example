import React, { PropTypes } from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onDecrement, onIncrement } = this.props;
    return (
      <p>clicked:
			{value}times
			{'  '}
        <button onClick={onIncrement}>+</button>
        {'  '}
        <button onClick={onDecrement}>-</button>
        {'  '}
        <button onClick={this.incrementIfOdd}>increment If Odd</button>
        {'  '}
        <button onClick={this.incrementAsync}>increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
