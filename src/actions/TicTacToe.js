import types from '../constants/ActionTypes';
import { checkIfGameHasEnded, checkIfOldWoman } from '../purejs/calculateWinner';
import { addToLeaderboard } from '../actions/Leaderboard';

/** Tick the TicTacToe on TicTacToe */
export const tickTicTacToe = square => ({
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

export const tickTicTacToeAction = square => (dispatch) => {
  dispatch(tickTicTacToe(square));
};

export const resetAction = () => (dispatch) => {
  dispatch(reset(reset));
};

export const checkEndGame = () => (dispatch, getState) => {
  const state = getState();

  if (state.TicTacToe.winner || state.TicTacToe.draw) {
    return;
  }

  const winnerDraw = checkIfGameHasEnded(state.TicTacToe.squares);

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

  const threeOrLessPlaysLeft = (state.TicTacToe.circlePlay + state.TicTacToe.noughtPlay <= 3);
  if (threeOrLessPlaysLeft) {
    const checkIfDraw = checkIfOldWoman(state.TicTacToe.squares, state.TicTacToe.circlePlay, state.TicTacToe.noughtPlay);
    if (checkIfDraw) {
      dispatch(draw());
      dispatch(addToLeaderboard({
        name: 'draw'
      }));
    }
  }
};
