import types from '../constants/ActionTypes';

export const setPlayers = (circle, nought) => ({
  type: types.SET_PLAYERS,
  circle,
  nought
});

export const setPlayersAction = (circle, nought) => (dispatch) => {
  dispatch(setPlayers(circle, nought));
};
