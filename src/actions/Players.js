import types from '../constants/ActionTypes';
import { reset } from '../actions/Square';

export const setPlayers = (circle, nought) => ({
  type: types.SET_PLAYERS,
  circle,
  nought
});

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
