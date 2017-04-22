import types from '../constants/ActionTypes';

export const addToLeaderboard = record => ({
  type: types.ADD_TO_LEADERBOARD,
  record
});

export const addToLeaderboardAction = record => (dispatch) => {
  dispatch(addToLeaderboard(record));
};
