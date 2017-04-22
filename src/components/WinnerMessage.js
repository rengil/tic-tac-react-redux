import React from 'react';
import PropTypes from 'prop-types';
import '../styles/winner.less';

const WinnerMessage = props =>
  <div className='winner-message'>

    <h2 className='winner' > The winner is { props.winner } </h2>

  </div>
  ;

WinnerMessage.propTypes = {
  winner: PropTypes.string.isRequired
};

export default WinnerMessage;
