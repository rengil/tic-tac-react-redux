import _ from 'lodash';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { tickSquareAction, checkEndGame } from '../actions/TicTacToe';

/**
 * Is the Square in the TIC TAC TOE
   @state {iconEffect} : used for effect on the click event
 */
class Square extends React.Component {

  constructor(props) {
    super(props);
    this.onDraw = this.onDraw.bind(this);

    this.state = { iconEffect: false };
  }

  /**
    * draws in this square, if the game is happening
    * @param {ClickEvent} e
  */
  onDraw(e) {
    e.preventDefault();

    this.props.tickSquareAction({
      drawType: this.props.nextDraw,
      position: this.props.position
    });

    this.props.checkEndGame();
    this.setState({
      iconEffect: true
    });
  }

  /**
   * Renders the component.
   *
   * @memberof components.TicTacToet
   */
  render() {
    let selected = false;
    if (this.props.squares[this.props.position]) {
      selected = true;
    }

    return (
      <div
        onClick={this.onDraw}
        className={'tictac-square ' + (selected ? ' drawed ' : '')
             + (_.intersection(this.props.winningArray,
               [this.props.position]).length ? ' -win ' : '')
        }
      >

        <div className={'draw'}>
          <i className='material-icons'>
            {this.props.squares[this.props.position] === 'circle' ?
              'radio_button_unchecked' : 'clear'
            }
          </i>
        </div>
      </div>
    );
  }

}

/**
 * @memberof components.Square
 * @prop {squares} propTypes - array of string representing each square in the tic tac toe
 * @prop {tickTicTacToeAction} - perform the click on the square, when the game is still happening
 * @prop {checkEndGame} - after every click action, dispatch this to check if the game has ended
 * @prop {position} - the position of the square in the tic tac toe
 * @prop {nextDraw} - the next draw that is going to be used, circle or nought
 * @prop {winningArray} - array of squares used for win, for class changing
 */
Square.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  tickSquareAction: PropTypes.func.isRequired,
  checkEndGame: PropTypes.func.isRequired,
  position: PropTypes.number,
  nextDraw: PropTypes.string,
  winningArray: PropTypes.arrayOf(PropTypes.number)
};

const mapStateToProps = state => ({
  squares: state.TicTacToe.squares,
  nextDraw: state.TicTacToe.nextDraw,
  winningArray: state.TicTacToe.winningArray
});

export default connect(
  mapStateToProps,
  { tickSquareAction, checkEndGame }
)(Square);
