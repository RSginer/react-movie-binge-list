import { types } from '../actions/types';

export default (state = {
  filter: undefined,
}, action) => {
  switch(action.type) {
    case types.CHANGE_GENRE:
      return {...state, filter: action.payload}
    default:
      return state;
  }
}