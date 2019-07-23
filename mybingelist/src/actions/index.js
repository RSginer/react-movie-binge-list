import { types } from './types';
import { gql } from "apollo-boost";
import { client } from './../apollo-client';

export const GET_FAVORITES = gql`
query getFavorites {
  favorites {
    id
      title
      releaseYear
      overview
      rating
      genres {
        name
      }
      poster(size: MEDIUM) {
        fullPath,
      },
      tagline
  }
}
`;

export const GET_ALL_MOVIES = gql`
query allMoviesByGenre($genre: String!) {
  allMovies(genre: $genre, limit: 10, offset:0) {
    metadata {
      limit
      total
      offset
    }
    data {
      id
      title
      releaseYear
      overview
      rating
      genres {
        name
      }
      poster(size: MEDIUM) {
        fullPath,
      },
      tagline
    }
  }
  favorites {
    id
  }
}`;

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

export const setupHeader = (dispatch) => (options) => dispatch({
  type: types.SET_ROUTE,
  payload: options
})
