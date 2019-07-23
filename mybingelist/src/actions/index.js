import { types } from './types';
import { gql } from "apollo-boost";
import { client } from './../apollo-client';

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
  
  dispatch({
    type: types.FETCH_MOVIES,
    payload: true
  })

  await client.query({
    query: GET_ALL_MOVIES,
    variables: {
      genre: genre
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