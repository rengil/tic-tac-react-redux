import reducer from '../src/reducers/Players';
import types from '../src/constants/ActionTypes';

describe('reducers', () => {
  it('should receive players data', () => {
    expect(
      reducer({ }, {
        type: types.SET_PLAYERS,
        circle: 'Renan',
        nought: 'Gil'
      })
    ).toEqual(
      {
        circle: 'Renan',
        nought: 'Gil'
      }
    );
  });

  it('should reset players', () => {
    expect(
      reducer({ circle: 'Renan', nought: 'Gil' }, {
        type: types.RESET_PLAYERS
      })
    ).toEqual(
      {

      }
    );
  });
});
