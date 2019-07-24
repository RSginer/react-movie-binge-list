import { gql } from "apollo-boost";

/**
 * Queries
 */
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

/**
 * Mutations
 */
export const ADD_TO_FAVORITES = gql`
  mutation addFavorite($movieId: Int!){
    addFavorite(movieId: $movieId) {
      id
    }
  }`;

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($movieId: Int!){
    removeFavorite(movieId: $movieId) {
      id
    }
  }`;
