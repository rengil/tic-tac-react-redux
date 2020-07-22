import React from 'react';
import PropTypes from 'prop-types';
import '../styles/winner.scss';

/**
 * Message that appears when the game has ended
 */
const EndGameMessage = props =>
  <div className='winner-message'>
    {props.draw
      ? <h2 className='winner' > It is a draw!</h2>
      : <h2 className='winner' > The winner is { props.winner } </h2>
    }


  </div>
  ;

  /**
   * @memberof components.EndGameMessage
   * @prop {winner} propTypes - if we have a winner, it will bring its name here
   * @prop {draw} propTypes - is true if we have a draw
   */
EndGameMessage.propTypes = {
  winner: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};

export default EndGameMessage;
