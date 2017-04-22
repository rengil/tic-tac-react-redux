import reducer from '../src/reducers/Square';
import types from '../src/constants/ActionTypes';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        squares: [],
        nextDraw: 'circle'
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
        squares,
        nextDraw: 'nought'
      }
    );
  });

  it('should not click a field that is already clicked', () => {
    const squares = [];
    squares[2] = 'nought';
    expect(
      reducer({ nextDraw: 'nought', squares: [undefined, undefined, 'nought'] }, {
        type: types.TICK_SQUARE,
        square: {
          drawType: 'circle',
          position: [2]
        }
      })
    ).toEqual(
      {
        squares,
        nextDraw: 'nought'
      }
    );
  });

  it('it should reset my field', () => {
    expect(
      reducer({ squares: [undefined, undefined, 'nought'] }, {
        type: types.RESET
      })
    ).toEqual(
      {
        squares: [],
        nextDraw: 'circle'
      }
    );
  });
});
