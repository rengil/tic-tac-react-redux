import _ from 'lodash';
import types from '../constants/ActionTypes';

/** Reducer : leaderboard
 * case: ADD_TO_LEADERBOARD
 *       1 - if not exists, add a new record in the array of records
 *       2 - or if exists, increment a existing record
 */
function leaderboard(state = { records: [] }, action) {
  switch (action.type) {
    case types.ADD_TO_LEADERBOARD: {
      let records = state.records.slice();
      const record = action.record;
      const recordAlreadyExists = _.filter(records, actualRecord =>
         actualRecord.name === action.record.name
      );

      if (recordAlreadyExists.length) {
        records = _.filter(records, actualRecord =>
           actualRecord.name !== action.record.name
        );
        record.victories = recordAlreadyExists[0].victories + 1;
      } else {
        record.victories = 1;
      }

      records.push(record);

      return Object.assign({}, state, {
        records
      });
    }

    default:
      return state;
  }
}

export default leaderboard;
