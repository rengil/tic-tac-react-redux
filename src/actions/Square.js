import types from '../constants/ActionTypes';

export const onClick = drawType => ({
  type: types.TICK_SQUARE,
  drawType
});

export const onClickAction = drawType => (dispatch) => {
  dispatch(onClick(drawType));
}
