import { onClick } from '../src/actions/Square';
import types from '../src/constants/ActionTypes';

describe('square', () => {
  it('should draw when clicked', () => {
    const drawType = 'circle';
    const position = [1,1];
    const expectedAction = {
      type: types.TICK_SQUARE,
      drawType,
      position
    };
    expect(onClick(drawType, position)).toEqual(expectedAction);
  });
});
