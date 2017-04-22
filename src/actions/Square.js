import types from '../constants/ActionTypes';

export const onClick = (drawType, position) => ({
  type: types.TICK_SQUARE,
  drawType,
  position
});

export const onClickAction = (drawType, position) => (dispatch) => {
  dispatch(onClick(drawType, position));
}
