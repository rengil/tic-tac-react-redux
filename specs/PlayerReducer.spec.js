import reducer from '../src/reducers/Players';
import types from '../src/constants/ActionTypes';
import errors from '../src/constants/Errors';

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
        nought: 'Gil',
        error: undefined
      }
    );
  });

  it('should receive error when circle is undefined', () => {
    expect(
      reducer({ }, {
        type: types.SET_PLAYERS,
        circle: undefined,
        nought: 'Gil'
      })
    ).toEqual(
      {
        error: errors.CIRCLE_NOT_DEFINED
      }
    );
  });

  it('should receive error when nought is undefined', () => {
    expect(
      reducer({ }, {
        type: types.SET_PLAYERS,
        circle: 'Gil',
        nought: undefined
      })
    ).toEqual(
      {
        error: errors.NOUGHT_NOT_DEFINED
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
