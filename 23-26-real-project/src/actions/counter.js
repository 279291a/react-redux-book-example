import { ASYNC } from 'redux-amrc';
import { customFetch } from '../utils/utils';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

export const incrementIfOdd = () => (dispatch, getState) => {
  const { async } = getState();

  if (async.counter.value % 2 === 0) {
    return;
  }

  dispatch(increment());
};

export const incrementAsync = (delay = 100) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};

export const loadCounter = () => ({
  [ASYNC]: {
    key: 'counter',
    promise: () => customFetch('./counter'),
  },
});
