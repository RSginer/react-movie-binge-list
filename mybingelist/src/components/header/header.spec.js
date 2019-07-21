import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
}


describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component =  shallow(<Header />);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  })

  it('Should say hello', () => {
    const text = findByTestAttr(component, 'text');
    expect(text.text()).toBe('Hello')
  })

})