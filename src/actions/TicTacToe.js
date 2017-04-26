import types from '../constants/ActionTypes';
import { checkIfGameHasEnded, checkIfOldWoman } from '../purejs/calculateWinner';
import { addToLeaderboard } from '../actions/Leaderboard';

/** Action: Tick a Square */
export const tickSquare = square => ({
  type: types.TICK_SQUARE,
  square
});

/** Action: Reset games */
export const reset = () => ({
  type: types.RESET
});

/** Action: define the Game was a draw */
export const draw = () => ({
  type: types.DRAW
});

/** Action: Finish the game, no squares can be clicked  */
export const endGame = winner => ({
  type: types.END_GAME,
  winner
});

export const tickSquareAction = square => (dispatch) => {
  dispatch(tickSquare(square));
};

export const resetAction = () => (dispatch) => {
  dispatch(reset(reset));
};

/** TODO - Make it shorter */
/** Action: check if the game ended with draw or a winner */
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
    const checkIfDraw
      = checkIfOldWoman(state.TicTacToe.squares, state.TicTacToe.circlePlay, state.TicTacToe.noughtPlay);
    if (checkIfDraw) {
      dispatch(draw());
      dispatch(addToLeaderboard({
        name: 'draw'
      }));
    }
  }
};
