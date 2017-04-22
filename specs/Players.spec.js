import { setPlayers } from '../src/actions/Players';
import types from '../src/constants/ActionTypes';

describe('square', () => {
  it('should receive the player names', () => {
    const circle = 'Renan';
    const nought = 'Gil';

    const expectedAction = {
      type: types.SET_PLAYERS,
      circle: 'Renan',
      nought: 'Gil'
    };
    expect(setPlayers(circle, nought)).toEqual(expectedAction);
  });
});
