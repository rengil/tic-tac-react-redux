import types from '../constants/ActionTypes';

const initialState = {
  squares: [],
  nextDraw: 'circle',
  circlePlay: 5,
  noughtPlay: 4,
  draw: false,
  winningArray: []
};

function squareReducer(state = initialState, action) {
  switch (action.type) {
    case types.TICK_SQUARE: {
      const squares = state.squares.slice();

      if (squares[action.square.position] || state.winner || state.draw) {
        return state;
      }
      squares[action.square.position] = action.square.drawType;
      return Object.assign({}, state, {
        squares,
        nextDraw: action.square.drawType === 'circle' ? 'nought' : 'circle',
        circlePlay: action.square.drawType === 'circle' ? state.circlePlay - 1 : state.circlePlay,
        noughtPlay: action.square.drawType === 'nought' ? state.noughtPlay - 1 : state.noughtPlay
      });
    }

    case types.RESET: {
      return Object.assign({}, state, {
        squares: [],
        nextDraw: 'circle',
        winner: undefined,
        circlePlay: 5,
        noughtPlay: 4,
        draw: false,
        winningArray: []
      });
    }

    case types.END_GAME: {
      return Object.assign({}, state, {
        winner: action.winner.winner,
        winningArray: action.winner.winningArray,
        nextDraw: undefined
      });
    }

    case types.DRAW: {
      return Object.assign({}, state, {
        draw: true,
        nextDraw: undefined
      });
    }


    default:
      return state;
  }
}

export default squareReducer;
