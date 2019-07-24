import React from 'react';
import Favorites from './favorites';
import { mount } from 'enzyme';
import { findByTestAttr } from './../../../utils/test';
import { MockedProvider } from 'react-apollo/test-utils';

import { GET_FAVORITES } from './../../graphql';

const favoritesMock = [
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
      query: GET_FAVORITES
    },
    result: {
      data: {
        favorites: {
          data: favoritesMock
        },
      },
    },
  },
];


describe('Favorites Component', () => {

  describe('Fetch initial query and render loader', () => {
    let component;

    beforeEach(() => {
      const props = {
        favorites: [],
        loading: true,
        fetched: false,
        error: undefined,
        setupHeader: () => { },
        fetchFavorites: () => {},
        removeFavorite: () => {}
      }
      component = mount(
        <Favorites.WrappedComponent {...props} />
      );
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'favoritesComponent');
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
        favorites: [],
        fetched: false,
        loading: false,
        error: {
          message: 'Error test'
        },
        setupHeader: () => { },
        fetchFavorites: () => {},
        removeFavorite: () => {}
      }
      component = mount(
        <Favorites.WrappedComponent {...props} />
      );
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'favoritesComponent');
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
        loading: false,
        fetched: true,
        error: undefined,
        favorites: favoritesMock,
        setupHeader: () => { },
        fetchFavorites: () => {},
        removeFavorite: () => {}
      }
      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Favorites.WrappedComponent {...props} />
        </MockedProvider>
      );
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'favoritesComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render movies', async () => {
      const movies = findByTestAttr(component, 'movieComponent');
      expect(movies.length).toBe(favoritesMock.length);
    });

  });

});