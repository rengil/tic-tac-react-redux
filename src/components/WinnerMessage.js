import React from 'react';
import PropTypes from 'prop-types';
import '../styles/winner.less';

const WinnerMessage = props =>
  <div className='winner-message'>
    {props.draw
      ? <h2 className='winner' > It is a draw!</h2>
      : <h2 className='winner' > The winner is { props.winner } </h2>
    }


  </div>
  ;

WinnerMessage.propTypes = {
  winner: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};

export default WinnerMessage;
