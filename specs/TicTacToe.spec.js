import { tickSquare } from '../src/actions/TicTacToe';
import types from '../src/constants/ActionTypes';

describe('square', () => {
  it('should draw when clicked', () => {
    const drawType = 'circle';
    const position = [3];
    const square = {
      drawType,
      position
    };

    const expectedAction = {
      type: types.TICK_SQUARE,
      square
    };
    expect(tickSquare(square)).toEqual(expectedAction);
  });
});
