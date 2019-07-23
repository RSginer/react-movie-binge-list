import { combineReducers } from 'redux';
import movies from './movies';
import header from './header';
import favorites from './favorites';

import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  movies,
  header,
  favorites,
  router: connectRouter(history)
})