import { onClick } from '../src/actions/Square';
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
    expect(onClick(square)).toEqual(expectedAction);
  });
});
