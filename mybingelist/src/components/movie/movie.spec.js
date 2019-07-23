import React from 'react';
import Movie from './movie';
import { findByTestAttr } from '../../../utils/test';
import { shallow } from 'enzyme';

describe('Movie Component', () => {

  describe('Render component', () => {
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
  
      component = shallow(<Movie {...props} medianRating={7} />);
    });
  
    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'movieComponent');
      expect(wrapper.length).toBe(1);
    });
  })


  describe('Rating star', () => {

    let component;

    beforeEach(() => {
  
      const props = {
        title: 'Movie 1',
        poster: {
          fullPath: 'https://via.placeholder.com/230x345'
        },
        overview: 'Movie overview',
        rating: 8,
        releaseYear: 2019
      }
  
      component = shallow(<Movie {...props} medianRating={7} />);
    });

    it('Should render rating star', () => {
      const wrapper = findByTestAttr(component, 'ratingStar');
      expect(wrapper.length).toBe(1);
    })

  })

  describe('NOT Rating star', () => {

    let component;

    beforeEach(() => {
  
      const props = {
        title: 'Movie 1',
        poster: {
          fullPath: 'https://via.placeholder.com/230x345'
        },
        overview: 'Movie overview',
        rating: 6,
        releaseYear: 2019
      }
  
      component = shallow(<Movie {...props} medianRating={7} />);
    });

    it('Should render rating star', () => {
      const wrapper = findByTestAttr(component, 'ratingStar');
      expect(wrapper.length).toBe(0);
    })

  })

});
