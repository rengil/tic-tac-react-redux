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
        <Player drawType='circle'/>
        <Player drawType='nought' />
        </div>

        <SquareContainer />

        {props.winner ?
          <WinnerMessage winner={props.winner} />
          : ''}
      </div>
    }
  </div>
  ;

Main.propTypes = {
  circle: PropTypes.string,
  nought: PropTypes.string,
  winner: PropTypes.winner,
};

const mapStateToProps = state => ({
  circle: state.Players.circle,
  nought: state.Players.nought,
  winner: state.Square.winner
});

export default connect(
  mapStateToProps,
  {  }
)(Main);
