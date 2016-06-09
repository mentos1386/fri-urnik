import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import app from './app';
import programs from './programs';
import schedules from './schedules';

export default combineReducers({
  app,
  programs,
  schedules,
  
  routing
});