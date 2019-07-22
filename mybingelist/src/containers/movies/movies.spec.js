import React from 'react';
import Movies from './movies';
import { mount } from 'enzyme';

import { MockedProvider } from 'react-apollo/test-utils';
import { testStore, findByTestAttr } from './../../../utils/test';

import { GET_ALL_MOVIES } from './movies';


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
          data: [{ id: '1', title: 'Movie title' }]
        },
      },
    },
  },
];

describe('Header Component', () => {

  let component;

  beforeEach(() => {
    const store = testStore({
      movies: {
        filter: filter
      }
    })
    component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Movies.WrappedComponent store={store} setupHeader={() => {}} />
      </MockedProvider>);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'moviesComponent');
    expect(wrapper.length).toBe(1);
  })


})