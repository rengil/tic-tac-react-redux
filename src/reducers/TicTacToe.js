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

// TODO: divide this reducer into two

/** Reducer : squareReducer
 * case: TICK_SQUARE
 *         1 - get the squares array in the state
 *         2 - define draw type. If first play, get it from the starts state
 *         3 - using the square position, apply the draw type
 *         4 - calculate circlePlay and noughtPlay that are the remaining moves for each
 *         5 - define the nextDraw
 *         5 - return state
 * case: RESET
 *         returns the initial state with inverted starter
 * case: END_GAME
 *        define the winner, the winning Array and undefine the newDraw
 * case: DRAW
 *        define a draw, undefine the newDraw
 */
function squareReducer(state = initialState, action) {
  switch (action.type) {
    case types.TICK_SQUARE: {
      const squares = state.squares.slice();
      const drawType = action.square.drawType ? action.square.drawType : state.starts;
      if (squares[action.square.position] || state.winner || state.draw) {
        return state;
      }
      squares[action.square.position] = drawType;
      return Object.assign({}, state, {
        squares,
        nextDraw: drawType === 'circle' ? 'nought' : 'circle',
        circlePlay: drawType === 'circle' ? state.circlePlay - 1 : state.circlePlay,
        noughtPlay: drawType === 'nought' ? state.noughtPlay - 1 : state.noughtPlay
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
