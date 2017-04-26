import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import TicTacToe from './TicTacToe';
import Players from './Players';
import Leaderboard from './Leaderboard';

export default combineReducers({
  TicTacToe,
  Players,
  Leaderboard,
  routing: routerReducer
});
