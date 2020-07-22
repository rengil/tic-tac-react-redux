import types from '../constants/ActionTypes';
import errors from '../constants/Errors';

/** Reducer : playerReducer
 * case: SET_PLAYERS
          define the circle and nought player names
* case: RESET_PLAYERS
         reset the circle and nought player names
 */
function playerReducer(state = JSON.parse(localStorage.getItem('state')) || {}, action) {
  switch (action.type) {
    case types.SET_PLAYERS: {
      if (!action.circle) {
        return Object.assign({}, state, {
          error: errors.CIRCLE_NOT_DEFINED
        });
      }

      if (!action.nought) {
        return Object.assign({}, state, {
          error: errors.NOUGHT_NOT_DEFINED
        });
      }

      if (action.nought === action.circle) {
        return Object.assign({}, state, {
          error: errors.CIRCLE_NOUGHT_SAME
        });
      }

      const nextState = {
        circle: action.circle,
        nought: action.nought,
        error: undefined
      }

      localStorage.setItem('state', JSON.stringify(nextState));

      return Object.assign({}, state, nextState);
    }

    case types.RESET_PLAYERS: {
      return Object.assign({}, state, {
        circle: undefined,
        nought: undefined
      });
    }

    default:
      return state;
  }
}

export default playerReducer;
