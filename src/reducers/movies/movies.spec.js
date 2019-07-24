import { types } from './../../actions/types';

import reducer from './movies';

const moviesMock = [
  {
    id: 1,
    title: 'Test title 1',
    releaseYear: '2019',
    overview: 'Test overview 1',
    rating: 8,
    genres: [
      {
        name: 'History',
      },
      {
        name: 'Drama',
      }
    ],
    poster: {
      fullPath: 'https://image.tmdb.org/t/p/w342/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg',
    }
  },
  {
    id: 2,
    title: 'Test title 2',
    releaseYear: '2019',
    overview: 'Test overview 2',
    rating: 8,
    genres: [
      {
        name: 'History',
      },
      {
        name: 'Drama',
      }
    ],
    poster: {
      fullPath: 'https://image.tmdb.org/t/p/w342/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg',
    }
  }
]

describe('Movies reducer', () => {

  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState.error).toBeUndefined();
    expect(newState.loading).toBeFalsy();
    expect(newState.movies.length).toBe(0);
    expect(newState.favoriteIds.length).toBe(0);

  })

  it('Should return loading', () => {
    const newState = reducer(undefined, {
      type: types.FETCH_MOVIES,
      payload: 'War'
    })
    expect(newState.loading).toBeTruthy();
    expect(newState.filter).toBe('War')
  })

  it('Should return error', () => {
    const newState = reducer(undefined, {
      type: types.FETCH_MOVIES_ERROR,
      payload: {
        message: 'Test message'
      }
    })
    expect(newState.error.message).toBe('Test message')
    expect(newState.loading).toBeFalsy();
    expect(newState.movies.length).toBe(0)
  })

  it('Should return movies and favoriteIds', () => {
    const newState = reducer(undefined, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        allMovies: {
          data: moviesMock
        },
        favorites: [
          1,
          2
        ]
      }
    })
    expect(newState.loading).toBeFalsy();
    expect(newState.movies.length).toBe(moviesMock.length);
    expect(newState.error).toBeUndefined();
    expect(newState.favoriteIds.length).toBe(2)
  })

  it('Should remove a favoriteId from favoriteIds', () => {
    const newState = reducer({
      favoriteIds: [1, 2],
      movies: [],
      loading: false
    }, {
      type: types.REMOVE_FAVORITE,
      payload: 1
    })
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeUndefined();
    expect(newState.favoriteIds.length).toBe(1)
  })

  it('Should add a favoriteId from favoriteIds', () => {
    const newState = reducer({
      favoriteIds: [1, 2],
      movies: [],
      loading: false
    }, {
      type: types.ADD_FAVORITE,
      payload: 3
    })
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeUndefined();
    expect(newState.favoriteIds.length).toBe(3)
  })
})