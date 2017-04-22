import types from '../constants/ActionTypes';

export const onClick = square => ({
  type: types.TICK_SQUARE,
  square
});

export const reset = () => ({
  type: types.RESET
});

export const onClickAction = square => (dispatch) => {
  dispatch(onClick(square));
};


export const resetAction = () => (dispatch) => {
  dispatch(reset(reset));
};
