import { addToLeaderboard } from '../src/actions/Leaderboard';
import types from '../src/constants/ActionTypes';

describe('leadboard', () => {
  it('should add winner to the Leaderboard', () => {
    const record = {
      name: 'Renan'
    };

    const expectedAction = {
      type: types.ADD_TO_LEADERBOARD,
      record
    };
    expect(addToLeaderboard(record)).toEqual(expectedAction);
  });
});
