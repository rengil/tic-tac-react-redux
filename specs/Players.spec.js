import { setPlayers, resetPlayers } from '../src/actions/Players';
import types from '../src/constants/ActionTypes';

describe('player', () => {
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

  it('should reset the player names', () => {
    const expectedAction = {
      type: types.RESET_PLAYERS
    };
    expect(resetPlayers()).toEqual(expectedAction);
  });
});
