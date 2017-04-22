import types from '../constants/ActionTypes';

export const onClick = squares => ({
  type: types.TICK_SQUARE,
  squares
});

export const onClickAction = squares => (dispatch) => {
  dispatch(onClick(squares));
};
