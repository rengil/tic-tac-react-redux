import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onClickAction } from '../actions/Square';

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.onDraw = this.onDraw.bind(this);
  }

  componentDidMount() {
    this.props.onClickAction(undefined, this.props.position);
  }

  onDraw(e) {
    e.preventDefault();
    this.props.onClickAction('nought', this.props.position);
  }

  render() {
    return (
      <div onClick={this.onDraw} className='tictac-square'>

        <div className='draw'>
          { this.props.drawType === 'circle' ?
            <i className='material-icons'> radio_button_unchecked </i> : ''}
          { this.props.drawType === 'nought' ? <i className='material-icons'> clear </i> : ''}
        </div>
      </div>
    );
  }

}

Square.propTypes = {
  square: PropTypes.object,
  onClickAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  square: state.Square.square
});

export default connect(
  mapStateToProps,
  { onClickAction }
)(Square);
