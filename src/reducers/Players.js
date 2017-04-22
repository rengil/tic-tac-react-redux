import types from '../constants/ActionTypes';

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
