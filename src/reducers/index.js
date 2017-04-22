import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Square from './Square';

export default combineReducers({
  Square,
  routing: routerReducer
});
