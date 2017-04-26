import reducer from '../src/reducers/TicTacToe';
import types from '../src/constants/ActionTypes';

const initialState = {
  squares: [],
  nextDraw: 'circle',
  circlePlay: 5,
  noughtPlay: 4,
  draw: false,
  starts: 'circle',
  winningArray: []
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      initialState
    );
  });

  it('should handle check square', () => {
    const squares = [];
    squares[3] = 'circle';
    expect(
      reducer(initialState, {
        type: types.TICK_SQUARE,
        square: {
          drawType: 'circle',
          position: [3]
        }
      })
    ).toEqual(
      {
        circlePlay: 4,
        draw: false,
        nextDraw: 'nought',
        noughtPlay: 4,
        squares,
        starts: 'circle',
        winningArray: []
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
      initialState
    );
  });
});
