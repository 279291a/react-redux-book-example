import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import counter from './counter';
import { INCREMENT, DECREMENT, UNDO, REDO } from '../actions';

const rootReducer = combineReducers({
  counter: undoable(counter, {
    filter: includeAction([INCREMENT, DECREMENT]),
    limit: 10,
    debug: true,
    undoType: UNDO,
    redoType: REDO,
  }),
});

export default rootReducer;
