import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onClickAction } from '../actions/Square';

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.onDraw = this.onDraw.bind(this);
  }

  onDraw(e) {
    e.preventDefault();
    this.props.onClickAction('nought');
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
  drawType: PropTypes.string,
  onClickAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  drawType: state.Square.drawType
});

export default connect(
  mapStateToProps,
  { onClickAction }
)(Square);
