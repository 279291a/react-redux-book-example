export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// export const onIncrement = () => ({ type: INCREMENT });
// export const onDecrement = () => ({ type: DECREMENT });
export function onIncrement() {
  return {
    type: INCREMENT,
  };
}

export function onDecrement() {
  return {
    type: DECREMENT,
  };
}

// export const incrementIfOdd = () => ({ dispatch, getState }) => {
//   console.log(arguments);
//   const { counter } = getState();
//   if (counter % 2 === 0) {
//     return;
//   }
//   dispatch(onIncrement());
// };

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(onIncrement());
  };
}

// export const incrementAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(onIncrement), 1000);
// };


export function incrementAsync(delay = 1000) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(onIncrement());
    }, delay);
  };
}
