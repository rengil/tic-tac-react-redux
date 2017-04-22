import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/playersCards.less';

const Player = props =>
  <div className='column player-card'>
    {props.drawType === 'circle' ?
      <p className='player'> {props.circle} is <b> Circle <i className='material-icons icon'> radio_button_unchecked </i> </b> </p>  :
      <p className='player'> {props.nought} is <b> Nought <i className='material-icons icon'> clear </i> </b>  </p>
    }
  </div>
  ;

Player.propTypes = {
  circle: PropTypes.string,
  nought: PropTypes.string,
  drawType: PropTypes.string
};

const mapStateToProps = state => ({
  circle: state.Players.circle,
  nought: state.Players.nought
});

export default connect(
  mapStateToProps,
  {  }
)(Player);
