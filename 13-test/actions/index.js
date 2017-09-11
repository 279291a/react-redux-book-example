export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const onIncrement = () => ({ type: INCREMENT });
export const onDecrement = () => ({ type: DECREMENT });
export const undo = () => ({ type: UNDO });
export const redo = () => ({ type: REDO });
export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(onIncrement());
  };
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(onIncrement());
    }, 1000);
  };
}
