import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Square from './Square';
import Players from './Players';
import Leaderboard from './Leaderboard';

export default combineReducers({
  Square,
  Players,
  Leaderboard,
  routing: routerReducer
});
