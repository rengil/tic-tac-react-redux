import Square from '../components/Square';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetAction } from '../actions/Square';

const Main = ({ resetAction }) =>
  <div className='main-container'>
    <button onClick={resetAction}> Reset </button>
    <div className='row'>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(position =>
        <div className='column'>
          <Square ref={position} position={position} />
        </div>)
      }

    </div>

  </div>
  ;

  Main.propTypes = {
    resetAction: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
  });

  export default connect(
    mapStateToProps,
    { resetAction }
  )(Main);
