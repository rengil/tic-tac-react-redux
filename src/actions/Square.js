import types from '../constants/ActionTypes';

export const onClick = square => ({
  type: types.TICK_SQUARE,
  square
});

export const reset = () => ({
  type: types.RESET
});

export const checkGameHasEnded = () => ({
  type: types.CHECK_GAME_ENDED
});

export const onClickAction = square => (dispatch) => {
  dispatch(onClick(square));
  dispatch(checkGameHasEnded());
};


export const resetAction = () => (dispatch) => {
  dispatch(reset(reset));
};
