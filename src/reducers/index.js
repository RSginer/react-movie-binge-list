import { combineReducers } from 'redux';
import movies from './movies/movies';
import header from './header/header';
import favorites from './favorites/favorites';

import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  movies,
  header,
  favorites,
  router: connectRouter(history)
})