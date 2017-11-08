import 'isomorphic-fetch';
import { ASYNC } from 'redux-amrc';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = () => ({ type: INCREMENT_COUNTER });
export const decrement = () => ({ type: DECREMENT_COUNTER });
export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }
  dispatch(increment());
};

export const incrementAsync = (delay = 1000) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};

export function load() {
  return {
    [ASYNC]: {
      key: 'counter',
      promise: () => fetch('http://localhost:3002/api/counter')
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        }),
    },
  };
}
