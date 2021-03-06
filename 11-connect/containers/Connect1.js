import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as ActionCreators from '../actions';

export default connect(
  state => ({ value: state.counter }),
  ActionCreators,
)(Counter);
