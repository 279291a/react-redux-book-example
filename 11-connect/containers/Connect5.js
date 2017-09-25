import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

@connect(
  state => ({ counter: state.counter }),
  ActionCreators
)
class Counter extends Component{//eslint-disable-line

  static propTypes={
    counter:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired,
    incrementIfOdd:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired,
  };

  render(){
    const {counter,onIncrement,onDecrement,incrementAsync,incrementIfOdd} = this.props;
    return (
      <p>clicked:
        {counter}  times
        {'  '}
        <button onClick={onIncrement}>+</button>
        {'  '}
        <button onClick={onDecrement}>-</button>
        {'  '}
        <button onClick={incrementIfOdd}>increment If Odd</button>
        {'  '}
        <button onClick={()=>incrementAsync()}>increment async</button>
      </p>
    );
  }
}


export default Counter;
