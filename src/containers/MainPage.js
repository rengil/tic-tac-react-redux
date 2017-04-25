import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import SquareContainer from './SquareContainer';
import PlayersContainer from './PlayersContainer';
import WinnerMessage from '../components/WinnerMessage';
import LeftMenu from '../components/LeftMenu';
import Player from '../components/Player';

const Main = props =>
  <div>


    {!props.circle || !props.nought ?
      <PlayersContainer />
    :
      <div className='main-container'>
        <LeftMenu />
        <div className='half-row'>
        <Player playNext={props.nextDraw === 'circle'} drawType='circle'/>
        <Player playNext={props.nextDraw === 'nought'} drawType='nought' />
        </div>

        <SquareContainer />

        {props.winner || props.draw ?
          <WinnerMessage draw={props.draw} winner={props.winner} />
          : ''}
      </div>
    }
  </div>
  ;

Main.propTypes = {
  circle: PropTypes.string,
  nought: PropTypes.string,
  winner: PropTypes.winner,
  nextDraw: PropTypes.string
};

const mapStateToProps = state => ({
  circle: state.Players.circle,
  nought: state.Players.nought,
  winner: state.Square.winner,
  draw: state.Square.draw,
  nextDraw: state.Square.nextDraw
});

export default connect(
  mapStateToProps,
  {  }
)(Main);
