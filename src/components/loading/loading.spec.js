import React from 'react';
import Loading from './loading';
import { findByTestAttr } from './../../../utils/test';
import { shallow } from 'enzyme';

describe('Loading Component', () => {
  let component;

  beforeEach(() => {

    component = shallow(<Loading />);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'loadingComponent');
    expect(wrapper.length).toBe(1);
  });

});
