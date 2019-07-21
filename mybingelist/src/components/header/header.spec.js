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
    component =  shallow(<Header showBackButton={true} showFavoritesButton={true} title="My Binge List"/>);
  });

  it('Should render', () => {
    const wrapper = findByTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  })

  it('Should renders title', () => {
    const text = findByTestAttr(component, 'title');
    expect(text.text()).toBe('My Binge List')
  })

  it('Should renders back button', () => {
    const backButton = findByTestAttr(component, 'backButton');
    expect(backButton.length).toBe(1)
  })

  it('Should renders favorites button', () => {
    const favoritesButton = findByTestAttr(component, 'favoritesButton');
    expect(favoritesButton.length).toBe(1)
  })

})