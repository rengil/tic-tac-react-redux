import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/leaderboard.less';

/**
 * Leaderboard contain the wins(by player) and draws
*/

class Leaderboard extends React.Component {

  constructor(props) {
    super(props);
    const records = props.records;
    records.map(record => {
      record.animation = '-show';
    })
    this.state = {
      records
    }
  }

  /** requestAnimationFrame and state combined to get animation*/
  componentWillReceiveProps(nextProps) {
    const records = nextProps.records;
    records.map(record => {
      record.animation = '';
    });

    this.setState({
      records
    })

    requestAnimationFrame(() => {
      const animateRecords = this.state.records;
      animateRecords.map(record => {
        record.animation = '-show';
        this.setState( {records} );
      })
    })
  }

  render() {
    return (
      <div className='players-leaderboard'>
        <h1 className='title'> Leaderboards </h1>
        <ul className='list'>
          { this.state.records.map(record =>
            <li className={`player ${(record.animation)}`} key={record.name}>
              {record.name} : {record.victories} </li>
          )}

        </ul>
      </div>
    );
  }
}


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
