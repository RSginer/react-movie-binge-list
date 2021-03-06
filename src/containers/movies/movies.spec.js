import React from 'react';
import Movies from './movies';
import { mount } from 'enzyme';
import { findByTestAttr } from './../../../utils/test';
import { MockedProvider } from 'react-apollo/test-utils';

import { GET_ALL_MOVIES } from '../../graphql';

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

const mocks = [
  {
    request: {
      query: GET_ALL_MOVIES,
      variables: {
        genre: 'History',
      },
    },
    result: {
      data: {
        allMovies: {
          data: moviesMock
        },
      },
    },
  },
];


describe('Movies Component', () => {

  describe('Fetch initial query and render loader', () => {
    let component;

    let setupHeader;

    beforeEach(() => {
      setupHeader = jest.fn();
      const props = {
        filter: undefined,
        medianRating: undefined,
        movies: [],
        loading: true,
        error: undefined,
        favoriteIds: [],
        setupHeader: setupHeader
      }
      component = mount(
        <Movies.WrappedComponent {...props} />
      );
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'moviesComponent');
      expect(setupHeader.mock.calls.length).toBe(1);
      expect(wrapper.length).toBe(1);
    });

    it('Should render loading state', async () => {
      const loading = findByTestAttr(component, 'loading');
      expect(loading.length).toBe(1);
    });

  });


  describe('Show error', () => {
    let component;

    beforeEach(() => {
      const props = {
        filter: undefined,
        medianRating: undefined,
        movies: [],
        loading: false,
        error: {
          message: 'Error test'
        },
        favoriteIds: [],
        setupHeader: () => { }
      }
      component = mount(
        <Movies.WrappedComponent {...props} />
      );
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'moviesComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render error component', async () => {
      const error = findByTestAttr(component, 'serverErrorComponent');
      expect(error.length).toBe(1);
    });

  });

  describe('Show movies', () => {
    let component;

    beforeEach(() => {
      const props = {
        filter: 'History',
        medianRating: undefined,
        movies: moviesMock,
        loading: false,
        error: undefined,
        favoriteIds: [],
        setupHeader: () => { }
      }
      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Movies.WrappedComponent {...props} />
        </MockedProvider>
      );
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'moviesComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render movies', async () => {
      const movies = findByTestAttr(component, 'movieComponent');
      expect(movies.length).toBe(moviesMock.length);
    });

  });

});
