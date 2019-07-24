import React from 'react';
import Loading from './loading';
import { findByTestAttr } from './../../../utils/test';
import { shallow } from 'enzyme';

describe('EmptyMessage Component', () => {
  let component;

  beforeEach(() => {

    component = shallow(<Loading />);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'loadingComponet');
    expect(wrapper.length).toBe(1);
  });

});
