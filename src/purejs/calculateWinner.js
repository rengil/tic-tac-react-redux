
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

export const checkIfGameHasEnded = squares => {
  let winner = '';

  for (var i = 0; i < testCases.length; i++) { 
    winner = compareThree(testCases[i][0], testCases[i][1], testCases[i][2], squares);
    if (winner) {
      return winner;
    }
  }
}
