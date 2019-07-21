import { combineReducers } from 'redux';
import movies from './movies';
import header from './header';

export default combineReducers({
  movies,
  header
})