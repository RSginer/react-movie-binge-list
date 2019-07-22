import React from 'react';
import Movies from './movies';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { testStore, findByTestAttr } from './../../../utils/test';

import { GET_ALL_MOVIES } from './movies';

import wait from 'waait';

const filter = 'Science Fiction';

const mocks = [
  {
    request: {
      query: GET_ALL_MOVIES,
      variables: {
        genre: filter,
      },
    },
    result: {
      data: {
        allMovies: {
          data: [
            { id: 1, title: 'Movie title 1' },
            { id: 2, title: 'Movie title 2' },
            { id: 3, title: 'Movie title 3' }
          ]
        },
      },
    },
  },
];

describe('Movies Component', () => {

  describe('Fetch initial query and render loader', () => {
    let component;

    beforeEach(() => {
      const store = testStore({
        movies: {
          filter: filter
        }
      })
      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Movies.WrappedComponent store={store} filter={filter} setupHeader={() => { }} />
        </MockedProvider>);
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'moviesComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render loading state', async () => {
      const loading = findByTestAttr(component, 'loading');
      expect(loading.length).toBe(1);
    });

  });

  describe('Show empty message if not filter exist', () => {
    let component;

    beforeEach(() => {
      const store = testStore({
        movies: {
          filter: undefined
        }
      })
      component = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Movies.WrappedComponent store={store} setupHeader={() => { }} />
        </MockedProvider>);
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'moviesComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render the empty message', async () => {
      const message = findByTestAttr(component, 'emptyText');
      expect(message.length).toBe(1);
    });

  });

});
