import { checkIfGameHasEnded } from '../src/purejs/calculateWinner';

describe('leadboard', () => {
  it('checking if with have false negatives', () => {
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
    for (let i = 0; i < testCases.length; i++) {
      const squares = [];
      squares[testCases[i][0]] = 'circle';
      squares[testCases[i][1]] = 'circle';
      squares[testCases[i][2]] = 'circle';

      const expected = {
        winner: 'circle',
        winningArray: [testCases[i][0], testCases[i][1], testCases[i][2]]
      };

      expect(checkIfGameHasEnded(squares)).toEqual(expected);
    }
  });
});
