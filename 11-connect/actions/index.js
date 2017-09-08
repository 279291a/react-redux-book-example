export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const onIncrement = () => ({ type: INCREMENT });
export const onDecrement = () => ({ type: DECREMENT });
export const incrementIfOdd = (dispatch, getState) => {
  const { counter } = getState();
  if (counter % 2 === 0) {
    return;
  }
  dispatch(onIncrement());
};

export const incrementAsync = (dispatch) => {
  setTimeout(() => dispatch(onIncrement), 1000);
};
