
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

const compareThree = (a, b, c, squares) => {
  if (squares[a] === squares[b] && squares[b] === squares[c]) {
    return {
      winner: squares[a],
      winningArray: [a, b, c]
    };
  }

  return {};
};

const isPossible = (a, b, c, squares, type, count) => {
  // Se o count é 0
  if (count === 0) {
    return false;
  }

  // Need to get um square to win
  if ((squares[a] === squares[b]) && !squares[c] && squares[a] === type) {
    return true;
  }

  if ((squares[b] === squares[c]) && !squares[a] && squares[b] === type) {
    return true;
  }

  if ((squares[a] === squares[c]) && !squares[b] && squares[c] === type) {
    return true;
  }

  // Precisa preencher dois quadrados para vencer

  if (count < 2) {
    return false;
  }

  if (!squares[a] && !squares[b] && squares[c] && squares[c] === type) {
    return true;
  }

  if (!squares[b] && !squares[c] && squares[a] && squares[a] === type) {
    return true;
  }

  if (!squares[a] && !squares[c] && squares[b] && squares[b] === type) {
    return true;
  }

  return false;
};

export const checkIfGameHasEnded = squares => {
  let checkWin = '';

  for ( var i = 0; i < testCases.length; i++) {
    checkWin = compareThree(testCases[i][0], testCases[i][1], testCases[i][2], squares);
    if (checkWin.winner) {
      return checkWin;
    }
  }

  return {};
}

export const checkIfOldWoman = (squares, circlePlay, noughtPlay) => {
  let canCircleWin;
  let canNoughtWin;
  for (let i = 0; i < testCases.length; i++) {
    canCircleWin =
      isPossible(testCases[i][0], testCases[i][1], testCases[i][2], squares, 'circle', circlePlay);
    canNoughtWin =
      isPossible(testCases[i][0], testCases[i][1], testCases[i][2], squares, 'nought', noughtPlay);
    if (canCircleWin || canNoughtWin) {
      return false;
    }
  }

  return true;
}
