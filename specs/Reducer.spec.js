import reducer from '../src/reducers/Square';
import types from '../src/constants/ActionTypes';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        drawType: undefined
      }
    );
  });

  it('should handle check square', () => {
    expect(
      reducer([], {
        type: types.TICK_SQUARE,
        drawType: 'circle'
      })
    ).toEqual(
      {
        drawType: 'circle'
      }
    );
  });
});
