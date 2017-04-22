import reducer from '../src/reducers/Square';
import types from '../src/constants/ActionTypes';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        squares: []
      }
    );
  });

  it('should handle check square', () => {
    const squares = [];
    squares[3] = 'circle';
    expect(
      reducer({ squares: [] }, {
        type: types.TICK_SQUARE,
        square: {
          drawType: 'circle',
          position: [3]
        }
      })
    ).toEqual(
      {
        squares
      }
    );
  });
});
