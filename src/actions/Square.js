import types from '../constants/ActionTypes';
import { checkIfGameHasEnded, checkIfOldWoman } from '../purejs/calculateWinner';
import { addToLeaderboard } from '../actions/Leaderboard';

export const onClick = square => ({
  type: types.TICK_SQUARE,
  square
});

export const reset = () => ({
  type: types.RESET
});

export const draw = () => ({
  type: types.DRAW
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

  if (state.Square.winner || state.Square.draw) {
    return;
  }

  const winnerDraw = checkIfGameHasEnded(state.Square.squares);

  if (winnerDraw.winner) {
    dispatch(
      endGame({
        winner: state.Players[winnerDraw.winner],
        winningArray: winnerDraw.winningArray
      }));

    dispatch(addToLeaderboard({
      name: state.Players[winnerDraw.winner]
    }));
    return;
  }

  const threeOrLessPlaysLeft = (state.Square.circlePlay + state.Square.noughtPlay <= 3);
  if (threeOrLessPlaysLeft) {
    const checkIfDraw = checkIfOldWoman(state.Square.squares, state.Square.circlePlay, state.Square.noughtPlay);
    if (checkIfDraw) {
      dispatch(draw());
      dispatch(addToLeaderboard({
        name: 'draw'
      }));
    }
  }
};
