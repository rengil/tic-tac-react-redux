import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/leftmenu.less';
import { resetAction } from '../actions/TicTacToe';
import { resetPlayersAction } from '../actions/Players';
import Leaderboard from './Leaderboard';

/**
 * A <LeftMenu> component is a component that renders in the left of the app,
 * the two actions buttons and the the LeaderboardContainer
*/

const LeftMenu = props =>
  <div className='left-menu'>
    <button
      id='again'
      className={'action-button ' + (props.again ? '-orange' : '')}
      onClick={props.resetAction}
    >
      { props.again ? 'Play Again?' : 'Reset'}
    </button >

    <button
      id='change'
      className='action-button'
      onClick={props.resetPlayersAction}
    >
        Change Users
    </button>

    <Leaderboard />
  </div>
  ;

  /**
   * @memberof components.LeftMenu
   * @prop {resetAction} propTypes - function that reset the game
   * @prop {resetPlayersAction} propTypes - function
   * that reset the name of the players and go back to the player set
   * @prop {again} propTypes - when the game is over,
   * the reset button changes the name to play
   */
LeftMenu.propTypes = {
  resetAction: PropTypes.string.isRequired,
  resetPlayersAction: PropTypes.string.isRequired,
  again: PropTypes.bool
};

const mapStateToProps = state => ({
  again: state.TicTacToe.winner || state.TicTacToe.draw
});

export default connect(
  mapStateToProps,
  { resetAction, resetPlayersAction }
)(LeftMenu);
