import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import programs from './programs';
import schedules from './schedules';

export default combineReducers({
  routing,
  
  programs,
  schedules
});