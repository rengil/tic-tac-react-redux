import reducer from '../src/reducers/Players';
import types from '../src/constants/ActionTypes';

describe('reducers', () => {
  it('should receive p', () => {
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
});
