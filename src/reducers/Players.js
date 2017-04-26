import types from '../constants/ActionTypes';

/** Reducer : playerReducer
 * case: SET_PLAYERS
          define the circle and nought player names
* case: RESET_PLAYERS
         reset the circle and nought player names
 */
function playerReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_PLAYERS: {
      return Object.assign({}, state, {
        circle: action.circle,
        nought: action.nought
      });
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
