import React from 'react';
import EmptyMessage from './emptyMessage';
import { findByTestAttr } from './../../../utils/test';
import { shallow } from 'enzyme';

describe('EmptyMessage Component', () => {
  let component;

  beforeEach(() => {

    component = shallow(<EmptyMessage />);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'emptyMessageComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render the empty message', async () => {
    const message = findByTestAttr(component, 'emptyText');
    expect(message.length).toBe(1);
  });


});
