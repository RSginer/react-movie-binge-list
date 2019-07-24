import { types } from '../../actions/types';

export default (state = {
  favorites: [],
  loading: false,
  fetched: false,
  error: undefined
}, action) => {
  switch (action.type) {
    case types.FETCH_FAVORITES:
      return { ...state, loading: true, favorites: [], error: undefined }
    case types.FETCH_FAVORITES_ERROR:
      return { ...state, loading: false, error: action.payload, favorites: [] }
    case types.FETCH_FAVORITES_SUCCESS:
      return { ...state, loading: false, favorites: action.payload, error: undefined, fetched: true }
    case types.REMOVE_FAVORITE:
      return { ...state, favorites: removeFavoriteFromList(state.favorites, action.payload) }
    case types.ADD_FAVORITE:
      return { ...state, favorites: addFavoriteToList(state.favorites, action.payload) }
    default:
      return state;
  }
}

function addFavoriteToList(favorites, movie) {
  return [...favorites, movie]
}

function removeFavoriteFromList(favorites, id) {
  return favorites.filter((f) => f.id !== id);
}

