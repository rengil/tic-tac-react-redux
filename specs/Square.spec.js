import { onClick } from '../src/actions/Square';
import types from '../src/constants/ActionTypes';

describe('square', () => {
  it('should draw when clicked', () => {
    const drawType = 'circle';
    const position = [1, 1];
    const square = {
      drawType,
      position
    };
    const squares = [];
    squares.push(square);
    const expectedAction = {
      type: types.TICK_SQUARE,
      squares
    };
    expect(onClick(squares)).toEqual(expectedAction);
  });
});
