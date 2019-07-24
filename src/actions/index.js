import { types } from './types';
import { GET_ALL_MOVIES, GET_FAVORITES } from './../graphql';
import { client } from './../apollo-client';

/**
 * Header Actions
 */
export const setupHeader = (dispatch) => (options) => dispatch({
  type: types.SET_ROUTE,
  payload: options
})

/**
 * Movies Actions
 */
export const fetchMovies = (dispatch) => async (genre) => {

  const g = genre.includes(',') ? genre.split(',')[0] : genre;

  dispatch({
    type: types.FETCH_MOVIES,
    payload: g
  })

  await client.query({
    query: GET_ALL_MOVIES,
    variables: {
      genre: g
    }
  }).then((response) => {
    if (response.errors) {
      throw new Error(response.errors[0].message);
    }

    dispatch({
      type: types.FETCH_MOVIES_SUCCESS,
      payload: response.data
    })
  }).catch((err) => dispatch({
    type: types.FETCH_MOVIES_ERROR,
    payload: err
  }))
}

export const clearMovies = (dispatch) => () => dispatch({
  type: types.CLEAR_MOVIES,
  payload: []
});

/**
 * Favorites Actions
 */
export const fetchFavorites = (dispatch) => async () => {

  dispatch({
    type: types.FETCH_FAVORITES
  })

  await client.query({
    query: GET_FAVORITES
  }).then((response) => {
    if (response.errors) {
      throw new Error(response.errors[0].message);
    }
    dispatch({
      type: types.FETCH_FAVORITES_SUCCESS,
      payload: response.data.favorites
    })
  }).catch((err) => dispatch({
    type: types.FETCH_FAVORITES_ERROR,
    payload: err
  }))
}

export const removeFavorite = (dispatch) => (id) => dispatch({
  type: types.REMOVE_FAVORITE,
  payload: id
});

export const addFavorite = (dispatch) => (id) => dispatch({
  type: types.ADD_FAVORITE,
  payload: id
});
