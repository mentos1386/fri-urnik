import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import app from './app';
import pickers from './pickers';
import programs from './programs';
import schedules from './schedules';

export default combineReducers({
  app,
  pickers,
  programs,
  schedules,
  
  routing
});