import types from '../constants/ActionTypes';
import { checkIfGameHasEnded } from '../purejs/calculateWinner';
import { addToLeaderboard } from '../actions/Leaderboard';

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

export const onClickAction = square => dispatch => {

  dispatch(onClick(square));

};

export const resetAction = () => (dispatch) => {
  dispatch(reset(reset));
};

export const checkEndGame = () => (dispatch, getState) => {
  const state = getState();

  if (state.Square.winner) {
    return;
  }

  const winnerDraw = checkIfGameHasEnded(state.Square.squares);
  if (winnerDraw) {
    dispatch(endGame(state.Players[winnerDraw]));
    dispatch(addToLeaderboard({
      name: state.Players[winnerDraw]
    }));
  }
};
