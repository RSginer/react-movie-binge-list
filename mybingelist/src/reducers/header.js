
import { types } from './../actions/types';

export default (state = {
  showBackButton: false,
  showFavoritesButton: true,
  title: 'My Binge List'
}, action) => {
  switch (action.type) {
    case types.SET_ROUTE: 
      return {...state, ...action.payload};
    default:
      return state
  }
}