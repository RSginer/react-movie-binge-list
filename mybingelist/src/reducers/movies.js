import { types } from '../actions/types';

export default (state = {
  filter: undefined,
  medianRating: undefined,
  movies: [],
  loading: false,
  error: undefined,
  favoriteIds: []
}, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return { ...state, loading: true, movies: [], error: undefined, filter: action.payload }
    case types.FETCH_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload }
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        medianRating: calcMedianRating(action.payload.allMovies.data),
        movies: action.payload.allMovies.data,
        favoriteIds: action.payload.favorites.map((f) => f.id)
      }
    case types.CLEAR_MOVIES:
      return { ...state, movies: action.payload, error: undefined, loading: false }
    case types.REMOVE_FAVORITE:
      return { ...state, favoriteIds: removeFavorite(state.favoriteIds, action.payload) }
    case types.ADD_FAVORITE:
      return { ...state, favoriteIds: addFavorite(state.favoriteIds, action.payload) }
    default:
      return state;
  }
}

function addFavorite(favoriteIds, id) {
  return [...favoriteIds, id]
}

function removeFavorite(favoriteIds, id) {
  return favoriteIds.filter((i) => i !== id);
}

function calcMedianRating(movies) {
  const ratings = movies.map((m) => m.rating);

  if (ratings.length === 0) return 0;

  ratings.sort(function (a, b) {
    return a - b;
  });

  var half = Math.floor(ratings.length / 2);

  if (ratings.length % 2)
    return ratings[half];

  return (ratings[half - 1] + ratings[half]) / 2.0;
}