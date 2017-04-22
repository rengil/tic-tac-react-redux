import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/players.less';

const LeaderboardContainer = props =>
  <div>
    <ul>
      { props.records.map(record =>
        <li> {record.name} : {record.victories} </li>
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
