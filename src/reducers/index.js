import counterReducer from './counter';
import LoggedReducer from './isLogged';
import { combineReducers } from 'redux';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});
