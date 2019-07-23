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

export const removeFavorite = (dispatch) => (id) => dispatch({
  type: types.REMOVE_FAVORITE,
  payload: id
});

export const addFavorite = (dispatch) => (id) => dispatch({
  type: types.ADD_FAVORITE,
  payload: id
});

/**
 * Favorites Actions
 */