import types from '../constants/ActionTypes';

const initialState = {
  squares: [],
  circlePlay: 5,
  noughtPlay: 4,
  draw: false,
  winningArray: [],
  starts: 'circle',
  nextDraw: 'circle'
};

function squareReducer(state = initialState, action) {
  switch (action.type) {
    case types.TICK_SQUARE: {
      const squares = state.squares.slice();
      const nextDraw = action.square.drawType ? action.square.drawType : state.starts;
      if (squares[action.square.position] || state.winner || state.draw) {
        return state;
      }
      squares[action.square.position] = nextDraw;
      return Object.assign({}, state, {
        squares,
        nextDraw: nextDraw === 'circle' ? 'nought' : 'circle',
        circlePlay: nextDraw === 'circle' ? state.circlePlay - 1 : state.circlePlay,
        noughtPlay: nextDraw === 'nought' ? state.noughtPlay - 1 : state.noughtPlay
      });
    }

    case types.RESET: {
      return Object.assign({}, state, {
        squares: [],
        winner: undefined,
        circlePlay: 5,
        noughtPlay: 4,
        draw: false,
        winningArray: [],
        starts: state.starts === 'circle' ? 'nought' : 'circle',
        nextDraw: state.starts === 'circle' ? 'nought' : 'circle'
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
