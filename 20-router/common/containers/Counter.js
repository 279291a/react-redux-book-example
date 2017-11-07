import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions';

function Counter({ increment, incrementAsync, decrement, incrementIfOdd, counter }) {
  return (
    <p>
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

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
