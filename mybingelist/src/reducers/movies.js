import { types } from '../actions/types';

export default (state = {
  filter: undefined,
  medianRating: undefined
}, action) => {
  switch(action.type) {
    case types.CHANGE_GENRE:
      return {...state, filter: extractFirstGenre(action.payload)}
    case types.CHANGE_MEDIAN_RATING:
      return {...state, medianRating: calcMedianRating(action.payload)}
    default:
      return state;
  }
}

function calcMedianRating(movies) {
  const ratings = movies.map((m) => m.rating);

  if(ratings.length ===0) return 0;

  ratings.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(ratings.length / 2);

  if (ratings.length % 2)
    return ratings[half];

  return (ratings[half - 1] + ratings[half]) / 2.0;
}

function extractFirstGenre(genre) {
  return genre.includes(',') ? genre.split(',')[0] : genre;
}
