import types from '../constants/ActionTypes';
import { checkIfGameHasEnded } from '../purejs/calculateWinner';

export const onClick = square => ({
  type: types.TICK_SQUARE,
  square
});

export const reset = () => ({
  type: types.RESET
});

export const endGame = winner => ({
  type: types.END_GAME,
  winner
});

export const onClickAction = square => (dispatch, getState) => {

  dispatch(onClick(square));

};

export const resetAction = () => (dispatch) => {
  dispatch(reset(reset));
};

export const checkEndGame = () => (dispatch, getState) => {
  const state = getState();
  const winnerDraw = checkIfGameHasEnded(state.Square.squares);
  if (winnerDraw) {
    dispatch(endGame(state.Players[winnerDraw]));
  }
}
