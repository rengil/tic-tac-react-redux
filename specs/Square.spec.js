import * as actions from '../src/actions/Square';
import * as types from '../src/constants/ActionTypes';

describe('square', () => {
  it('should draw when clicked', () => {
    const drawType = 'circle';
    const expectedAction = {
      type: types.TICK_SQUARE,
      drawType
    };
    expect(actions.onClick(drawType)).toEqual(expectedAction);
  });
});
