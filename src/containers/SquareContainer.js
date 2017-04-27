import React from 'react';
import Square from '../components/Square';

/**
 * Container of the Squares in the Tic Tac Toe
*/
const SquareContainer = () =>
  <div className='square-container'>
    <div className='columns is-mobile is-multiline'>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(position =>
        <div className='column column is-one-quarter'>
          <Square position={position} />
        </div>)
      }

    </div>

  </div>
  ;

export default SquareContainer;
