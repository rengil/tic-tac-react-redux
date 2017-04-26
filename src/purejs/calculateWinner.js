/** all the test cases for being a winner in tic tac */
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

/** check if the test case is a winner */
const checkTestCaseForWin = (a, b, c, squares) => {
  if (squares[a] === squares[b] && squares[b] === squares[c]) {
    return {
      winner: squares[a],
      winningArray: [a, b, c]
    };
  }

  return {};
};

/** check if the test case STILL CAN BE a winner*/
const checkTestCaseStillPossibleWinForDrawType = (a, b, c, squares, drawType, typeLastMoves) => {
  // if the the player has no moves, test case is no possible for him
  if (typeLastMoves === 0) {
    return false;
  }

  // One Square remaning, the two already drawed equals the draw type
  if ((squares[a] === squares[b]) && !squares[c] && squares[a] === drawType) {
    return true;
  }

  if ((squares[b] === squares[c]) && !squares[a] && squares[b] === drawType) {
    return true;
  }

  if ((squares[a] === squares[c]) && !squares[b] && squares[c] === drawType) {
    return true;
  }

  // Two squares are needed to check. If less than two moves for the type, return false

  if (typeLastMoves < 2) {
    return false;
  }

  // the only square must be equal to the dray type
  if (!squares[a] && !squares[b] && squares[c] && squares[c] === drawType) {
    return true;
  }

  if (!squares[b] && !squares[c] && squares[a] && squares[a] === drawType) {
    return true;
  }

  if (!squares[a] && !squares[c] && squares[b] && squares[b] === drawType) {
    return true;
  }

  return false;
};

// call the all test cases, if one is true, return a winner
export const checkIfGameHasEnded = (squares) => {
  let checkWin = '';

  for (let i = 0; i < testCases.length; i++) {
    checkWin = checkTestCaseForWin(testCases[i][0], testCases[i][1], testCases[i][2], squares);
    if (checkWin.winner) {
      return checkWin;
    }
  }

  return {};
};

// call the all test cases, if one still can be a winner, returns false
export const checkIfOldWoman = (squares, circlePlay, noughtPlay) => {
  let canCircleWin;
  let canNoughtWin;
  for (let i = 0; i < testCases.length; i++) {
    canCircleWin =
      checkTestCaseStillPossibleWinForDrawType(testCases[i][0], testCases[i][1], testCases[i][2], squares, 'circle', circlePlay);
    canNoughtWin =
      checkTestCaseStillPossibleWinForDrawType(testCases[i][0], testCases[i][1], testCases[i][2], squares, 'nought', noughtPlay);
    if (canCircleWin || canNoughtWin) {
      return false;
    }
  }

  return true;
};
