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
        <div className='columns'>
          <Player playNext={props.nextDraw === 'circle'} drawType='circle' />
          <Player playNext={props.nextDraw === 'nought'} drawType='nought' />
        </div>

        <SquareContainer />
        {props.draw || props.winner ?
          <EndGameMessage draw={props.draw} winner={props.winner} /> : ''
        }

      </div>
    }
  </div>
  ;

const mapStateToProps = state => ({
  circle: state.Players.circle,
  nought: state.Players.nought,
  winner: state.TicTacToe.winner,
  draw: state.TicTacToe.draw,
  nextDraw: state.TicTacToe.nextDraw
});

export default connect(
  mapStateToProps,
  { }
)(TicTacToe);
