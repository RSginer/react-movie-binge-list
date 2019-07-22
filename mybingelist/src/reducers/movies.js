import { types } from '../actions/types';

export default (state = {
  filter: undefined,
}, action) => {
  switch(action.type) {
    case types.CHANGE_GENRE:
      return {...state, filter: extractFirstGenre(action.payload)}
    default:
      return state;
  }
}

function extractFirstGenre(genre) {
  return genre.includes(',') ? genre.split(',')[0] : genre;
} 