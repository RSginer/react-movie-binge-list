import { combineReducers } from 'redux';
import movies from './movies';
import header from './header';

import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  movies,
  header,
  router: connectRouter(history)
})