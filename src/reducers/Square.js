import types from '../constants/ActionTypes';

const initialState = {
  squares: []
};

function squareReducer(state = initialState, action) {
  switch (action.type) {
    case types.TICK_SQUARE: {
      const squares = state.squares.slice();
      squares[action.square.position] = action.square.drawType;
      return Object.assign({}, state, {
        squares
      });
    }
    default:
      return state;
  }
}

export default squareReducer;
