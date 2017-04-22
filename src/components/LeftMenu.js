import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/leftmenu.less';
import { resetAction } from '../actions/Square';
import { resetPlayersAction } from '../actions/Players';
import LeaderboardContainer from '../containers/LeaderboardContainer';

const LeftMenu = props =>
  <div className='left-menu'>

    <button className='action-button' onClick={props.resetAction}> Reset </button>
    <button className='action-button' onClick={props.resetPlayersAction}> Change Users </button>
    <LeaderboardContainer />
  </div>
  ;

LeftMenu.propTypes = {
  resetAction: PropTypes.string.isRequired,
  resetPlayersAction: PropTypes.string.isRequired
};

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps,
  { resetAction, resetPlayersAction }
)(LeftMenu);
