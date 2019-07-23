import React from 'react';
import ServerError from './serverError';
import { findByTestAttr } from './../../../utils/test';
import { shallow } from 'enzyme';

describe('ServerError Component', () => {
  let component;

  beforeEach(() => {

    component = shallow(<ServerError message="Test" genre="Action" />);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'serverErrorComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render the message', async () => {
    const message = findByTestAttr(component, 'errorMessage');
    expect(message.length).toBe(1);
  });


});
