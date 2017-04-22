import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import SquareContainer from './SquareContainer';
import PlayersContainer from './PlayersContainer';
import WinnerMessage from '../components/WinnerMessage';
import { resetAction } from '../actions/Square';
import { resetPlayersAction } from '../actions/Players';

const Main = props =>
  <div className='main-container'>


    {!props.circle || !props.nought ?
      <PlayersContainer />
    :
      <div>
        <button className='action-button' onClick={props.resetAction}> Reset </button>
        <button className='action-button' onClick={props.resetPlayersAction}> Change Users </button>
        <SquareContainer />
      </div>
    }

    {props.winner ?
      <WinnerMessage winner={props.winner} />
      : ''}


  </div>
  ;

Main.propTypes = {
  circle: PropTypes.string,
  nought: PropTypes.string,
  winner: PropTypes.winner,
  resetAction: PropTypes.func.isRequired,
  resetPlayersAction: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  circle: state.Players.circle,
  nought: state.Players.nought,
  winner: state.Square.winner
});

export default connect(
  mapStateToProps,
  { resetAction, resetPlayersAction }
)(Main);
