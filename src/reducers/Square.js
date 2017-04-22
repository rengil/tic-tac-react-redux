import types from '../constants/ActionTypes';

const initialState = {
  squares: [],
  nextDraw: 'circle'
};

function squareReducer(state = initialState, action) {
  switch (action.type) {
    case types.TICK_SQUARE: {
      const squares = state.squares.slice();

      if (squares[action.square.position] || state.winner) {
        return state;
      }
      squares[action.square.position] = action.square.drawType;
      return Object.assign({}, state, {
        squares,
        nextDraw: action.square.drawType === 'circle' ? 'nought' : 'circle'
      });
    }

    case types.RESET: {
      return Object.assign({}, state, {
        squares: [],
        nextDraw: 'circle',
        winner: undefined
      });
    }

    case types.END_GAME: {
      return Object.assign({}, state, {
        winner: action.winner
      });
    }


    default:
      return state;
  }
}

export default squareReducer;
