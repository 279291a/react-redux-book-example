import { createStore } from 'redux';

function increment() {
  return { type: 'INCREMENT' };
}

function decrement() {
  return { type: 'DECREMENT' };
}

function incrementIfOdd() {
  return (dispatch, getState) => {
    const value = getState();
    if (value % 2 === 0) {
      return;
    }
    dispatch(increment());
  };
}

function incrementAsync(delay = 1000) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

let currentValue = store.getState();

const listener = () => {
  const previousValue = currentValue;
  currentValue = store.getState();
  console.log('pre state:', previousValue, 'next state:', currentValue);
};

store.subscribe(listener);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
