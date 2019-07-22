import React from 'react';
import Movie from './movie';
import { findByTestAttr } from '../../../utils/test';
import { shallow } from 'enzyme';

describe('EmptyMessage Component', () => {
  let component;

  beforeEach(() => {

    component = shallow(<Movie />);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'movieComponent');
    expect(wrapper.length).toBe(1);
  });

});
