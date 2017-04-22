import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/leaderboard.less';

const LeaderboardContainer = props =>
  <div className='players-leaderboard'>
    <h1 className='title'> Leaderboards </h1>
    <ul className='list'>
      { props.records.map(record =>
        <li className='player'> {record.name} : {record.victories} </li>
      )
      }

    </ul>
  </div>;


LeaderboardContainer.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  records: state.Leaderboard.records
});

export default connect(
  mapStateToProps,
  { }
)(LeaderboardContainer);
