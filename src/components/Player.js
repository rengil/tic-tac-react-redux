import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/playersCards.less';

/**
 * A <Player> is the component that has the name of the player with its draw type.
 * The players with the .-playnext class, will be in highlight
 */
const Player = props =>
  <div className={`column player-card ${(props.playNext ? '-playnext' : '')}`}>
    {props.drawType === 'circle' ?
      <p className='player'>
        {props.circle} is <b> Circle <i className='material-icons icon'>
        radio_button_unchecked </i> </b>
      </p> :
      <p className='player'>
        {props.nought} is <b> Nought <i className='material-icons icon'> clear </i> </b>
      </p>
    }

  </div>
  ;

Player.propTypes = {
  circle: PropTypes.string.isRequired,
  nought: PropTypes.string.isRequired,
  drawType: PropTypes.string.isRequired,
  playNext: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  circle: state.Players.circle,
  nought: state.Players.nought
});

export default connect(
  mapStateToProps,
  { }
)(Player);
