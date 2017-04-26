import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/leaderboard.less';

/**
 * Leaderboard contain the wins(by player) and draws
*/

const Leaderboard = props =>
  <div className='players-leaderboard'>
    <h1 className='title'> Leaderboards </h1>
    <ul className='list'>
      { props.records.map(record =>
        <li key={record.name} className='player'>
          {record.name} : {record.victories} </li>
      )}

    </ul>
  </div>;


/**
 * @memberof components.Leaderboard
 * @prop {records} propTypes - object of records with the name (or draw), with
 * the count of victories
*/
Leaderboard.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  records: state.Leaderboard.records
});

export default connect(
  mapStateToProps,
  { }
)(Leaderboard);
