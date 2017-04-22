import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Square from './Square';
import Players from './Players';

export default combineReducers({
  Square,
  Players,
  routing: routerReducer
});
