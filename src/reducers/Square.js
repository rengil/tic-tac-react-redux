import types from '../constants/ActionTypes';

const initialState = {
  squares: [],
  nextDraw: 'circle'
};

const testCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

const compareThree = (a,b,c, squares) => {
  if( squares[a] === squares[b] && squares[b] === squares[c]) {
    return squares[a]
  }

  return '';
}

const checkIfGameHasEnded = squares => {
  var winner = '';

  for (var i = 0; i < testCases.length; i++) {
    winner = compareThree(testCases[i][0], testCases[i][1], testCases[i][2], squares);
    if (winner) {
      return winner;
    }
  }
}


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
        nextDraw: 'circle'
      });
    }

    case types.CHECK_GAME_ENDED: {
      const squares = state.squares;
      var winner = checkIfGameHasEnded(squares);
      return Object.assign({}, state, {
        winner
      });
    }


    default:
      return state;
  }
}

export default squareReducer;
