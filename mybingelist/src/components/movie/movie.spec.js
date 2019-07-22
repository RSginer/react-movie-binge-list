import React from 'react';
import Movie from './movie';
import { findByTestAttr } from '../../../utils/test';
import { shallow } from 'enzyme';

describe('Movie Component', () => {
  let component;

  beforeEach(() => {

    const props = {
      title: 'Movie 1',
      poster: {
        fullPath: 'https://via.placeholder.com/230x345'
      },
      overview: 'Movie overview',
      releaseYear: 2019
    }

    component = shallow(<Movie {...props} />);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'movieComponent');
    expect(wrapper.length).toBe(1);
  });

});
