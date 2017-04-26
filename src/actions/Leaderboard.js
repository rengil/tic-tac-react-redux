import types from '../constants/ActionTypes';

/** Action: add win or draw to the leaderboard */
export const addToLeaderboard = record => ({
  type: types.ADD_TO_LEADERBOARD,
  record
});

export const addToLeaderboardAction = record => (dispatch) => {
  dispatch(addToLeaderboard(record));
};
