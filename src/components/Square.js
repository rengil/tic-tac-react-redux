import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onClickAction } from '../actions/Square';

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.onDraw = this.onDraw.bind(this);
  }

  componentDidMount() {
    const square = {};
    square.drawType = undefined;
    square.position = this.props.position;
    this.props.onClickAction(square);
  }

  onDraw(e) {
    e.preventDefault();
    const square = {};
    square.drawType = this.props.nextDraw;
    square.position = this.props.position;
    this.props.onClickAction(square);
  }

  render() {
    let selected = false;
    if (this.props.squares[this.props.position]) {
      selected = true;
    }

    return (
      <div onClick={this.onDraw} className={'tictac-square ' + (selected ? ' drawed ' : '')}>

        <div className='draw'>
          { this.props.squares[this.props.position] === 'circle' ?
            <i className='material-icons'> radio_button_unchecked </i> : ''}
          { this.props.squares[this.props.position] === 'nought' ? <i className='material-icons'> clear </i> : ''}
        </div>
      </div>
    );
  }

}

Square.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClickAction: PropTypes.func.isRequired,
  position: PropTypes.number,
  nextDraw: PropTypes.string
};

const mapStateToProps = state => ({
  squares: state.Square.squares,
  nextDraw: state.Square.nextDraw
});

export default connect(
  mapStateToProps,
  { onClickAction }
)(Square);
