import types from '../constants/ActionTypes';

const initialState = {
  drawType: undefined
};

function squareReducer(state = initialState, action) {
  switch (action.type) {
    case types.TICK_SQUARE:
      return Object.assign({}, state, {
        drawType: action.drawType
      });
    default:
      return state;
  }
}

export default squareReducer;
