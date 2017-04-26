import React from 'react';
import Square from '../components/Square';

const SquareContainer = () =>
  <div className='square-container'>
    <div className='row'>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(position =>
        <div className='column'>
          <Square position={position} />
        </div>)
      }

    </div>

  </div>
  ;

export default SquareContainer;
