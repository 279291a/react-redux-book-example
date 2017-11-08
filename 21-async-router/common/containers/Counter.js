import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

@connect(
  state => ({ state }),
  actionCreators
)

class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  };

  render() {
    const {
      increment, incrementAsync, decrement, incrementIfOdd, state,load
    } = this.props;

    return (
      <div>
        {'  '}
        <button onClick={increment}>+</button>
        {'  '}
        <button onClick={decrement}>-</button>
        {'  '}
        <button onClick={incrementIfOdd}>increment if odd</button>
        {'  '}
        <button onClick={() => incrementAsync()}>increment Async</button>
        {'   '}
        <button onClick={load}>load</button>
        <br />
        程序当前的state:
      <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    )
  }
}

export default Counter;
