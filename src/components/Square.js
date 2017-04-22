import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { onClickAction } from '../actions/Square';

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.onDraw = this.onDraw.bind(this);
  }

  onDraw() {
    this.props.onClickAction('circle');
  }

  render() {
    return (
      <div onClick={this.onDraw} className='tictac-square'>
      TESTE
        <div className='draw'>
          { this.props.drawType === 'circle' ? 'CIRCLE' : ''}
          { this.props.drawType === 'nought' ? 'NOUGHT' : ''}
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
