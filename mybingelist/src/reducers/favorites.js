import { types } from '../actions/types';

export default (state = {
  favorites: [],
  loading: false,
  error: undefined
}, action) => {
  switch (action.type) {
    case types.FETCH_FAVORITES:
      return { ...state, loading: true, favorites: [], error: undefined }
    case types.FETCH_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload, favorites: [] }
    case types.FETCH_FAVORITES_SUCCESS:
      return { ...state, loading: false, favorites: action.payload, error: undefined}
    default:
      return state;
  }
}

