import { combineReducers } from 'redux';
import counter from './counter';
// 使用combineReducers 来进行合并，便于扩展，在进行合并后，计数器的数值被转移到了state.counter中
const rootReducer = combineReducers({ counter });

export default rootReducer;
