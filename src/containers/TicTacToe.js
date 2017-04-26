import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import SquareContainer from './SquareContainer';
import PlayersContainer from './PlayersContainer';
import EndGameMessage from '../components/EndGameMessage';
import LeftMenu from '../components/LeftMenu';
import Player from '../components/Player';

/**
 * Main Page of the App
*/
const TicTacToe = props =>
  <div>


    {!props.circle || !props.nought ?
      <PlayersContainer />
    :
      <div className='main-container'>
        <LeftMenu />
        <div className='half-row'>
          <Player playNext={props.nextDraw === 'circle'} drawType='circle' />
          <Player playNext={props.nextDraw === 'nought'} drawType='nought' />
        </div>

        <SquareContainer />

        {props.winner || props.draw ?
          <EndGameMessage draw={props.draw} winner={props.winner} />
          : ''}
      </div>
    }
  </div>
  ;

  /**
   * @memberof components.TicTacToe
   * @prop {circle} propTypes - player that is circle
   * @prop {nought} propTypes - player that is nought
   * @prop {winner} propTypes - the winner, if exists
   * @prop {nextDraw} propTypes - next draw that will be played -- circle or nought
   * @prop {draw} propTypes - if we have a match that is a draw
  */
TicTacToe.propTypes = {
  circle: PropTypes.string,
  nought: PropTypes.string,
  winner: PropTypes.winner,
  nextDraw: PropTypes.string,
  draw: PropTypes.bool
};

const mapStateToProps = state => ({
  circle: state.Players.circle,
  nought: state.Players.nought,
  winner: state.TicTacToe.winner,
  draw: state.TicTacToe.draw,
  nextDraw: state.TicTacToe.nextDraw
});

export default connect(
  mapStateToProps,
  {  }
)(TicTacToe);
