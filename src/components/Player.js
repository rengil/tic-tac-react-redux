import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/playersCards.scss';
import Icon from '@material-ui/core/Icon';

/**
 * A <Player> is the component that has the name of the player with its draw type.
 * The players with the .-playnext class, will be in highlight
 */
const Player = props =>
  <div className={`column player-card ${(props.playNext ? '-playnext' : '')}`}>
    {props.drawType === 'circle' ?
      <p className='player'>
        {props.circle} is <b> Circle ⭕️
        </b>
      </p> :
      <p className='player'>
        {props.nought} is   ️ 𝗫
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
