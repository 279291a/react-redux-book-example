import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { onIncrement, onDecrement, incrementIfOdd, incrementAsync } from '../actions';

export default connect(
  state => ({ value: state.counter }),
  dispatch => ({
    onIncrement: () => dispatch(onIncrement()),
    onDecrement: () => dispatch(onDecrement()),
    incrementIfOdd: () => dispatch(incrementIfOdd()),
    incrementAsync: () => dispatch(incrementAsync()),
  }),
)(Counter);
