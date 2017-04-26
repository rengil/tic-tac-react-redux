import types from '../constants/ActionTypes';
import errors from '../constants/Errors';
import { reset } from '../actions/TicTacToe';

/** Action: set players by circle or nought */
export const setPlayers = (circle, nought) => ({
  type: types.SET_PLAYERS,
  circle,
  nought
});

/** Action: reset the players name */
export const resetPlayers = () => ({
  type: types.RESET_PLAYERS
});

export const setPlayersAction = (circle, nought) => (dispatch) => {
  dispatch(setPlayers(circle, nought));
};

export const resetPlayersAction = () => (dispatch) => {
  dispatch(resetPlayers());
  dispatch(reset());
};
