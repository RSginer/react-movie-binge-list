import { types } from './../../actions/types';

import reducer from './favorites';

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

describe('Favorites reducer', () => {

  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState.error).toBeUndefined();
    expect(newState.loading).toBeFalsy();
    expect(newState.favorites.length).toBe(0)
  })

  it('Should return loading', () => {
    const newState = reducer(undefined, {
      type: types.FETCH_FAVORITES
    })
    expect(newState.loading).toBeTruthy();
  })

  it('Should return error', () => {
    const newState = reducer(undefined, {
      type: types.FETCH_FAVORITES_ERROR,
      payload: {
        message: 'Test message'
      }
    })
    expect(newState.error.message).toBe('Test message')
    expect(newState.loading).toBeFalsy();

  })

  it('Should return favorites', () => {
    const newState = reducer(undefined, {
      type: types.FETCH_FAVORITES_SUCCESS,
      payload: moviesMock
    })
    expect(newState.loading).toBeFalsy();
    expect(newState.favorites.length).toBe(moviesMock.length);
    expect(newState.fetched).toBeTruthy();
    expect(newState.error).toBeUndefined();
  })

  it('Should remove a movie from favorites', () => {
    const newState = reducer({
      favorites: moviesMock,
      movies: [],
      loading: false
    }, {
      type: types.REMOVE_FAVORITE,
      payload: moviesMock[0].id
    })
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeUndefined();
    expect(newState.favorites.length).toBe(moviesMock.length - 1)
  })

  it('Should add a movie to favorites', () => {
    const newState = reducer({
      favorites: moviesMock,
      movies: [],
      loading: false
    }, {
      type: types.ADD_FAVORITE,
      payload:  {
        id: 3,
        title: 'Test title 3',
        releaseYear: '2019',
        overview: 'Test overview 3',
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
    })
    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBeUndefined();
    expect(newState.favorites.length).toBe(moviesMock.length + 1)
  })
})
