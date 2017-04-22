import reducer from '../src/reducers/Square';
import types from '../src/constants/ActionTypes';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        drawType: undefined,
        position: undefined
      }
    );
  });

  it('should handle check square', () => {
    expect(
      reducer([], {
        type: types.TICK_SQUARE,
        drawType: 'circle',
        position: [1, 1]
      })
    ).toEqual(
      {
        drawType: 'circle',
        position: [1, 1]
      }
    );
  });
});
