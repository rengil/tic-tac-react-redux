import types from '../constants/ActionTypes';

function playerReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_PLAYERS: {
      return Object.assign({}, state, {
        circle: action.circle,
        nought: action.nought
      });
    }

    default:
      return state;
  }
}

export default playerReducer;
