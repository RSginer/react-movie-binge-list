import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import { testStore, findByTestAttr } from './../../../utils/test';

describe('Header Component', () => {

  describe('Renders all elements', () => {
    let component;

    beforeEach(() => {
      const store = testStore({
        header: {
          showBackButton: true,
          showFavoritesButton: true,
          title: 'My Binge List'
        }
      })
      component = shallow(<Header store={store} />).childAt(0).dive();
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


  describe('Renders just title and backbutton', () => {
    let component;

    beforeEach(() => {
      const store = testStore({
        header: {
          showBackButton: true,
          showFavoritesButton: false,
          title: 'My Binge List'
        }
      })
      component = shallow(<Header store={store} />).childAt(0).dive();
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

    it('Should NOT renders favorites button', () => {
      const favoritesButton = findByTestAttr(component, 'favoritesButton');
      expect(favoritesButton.length).toBe(0)
    })

  })

  describe('Renders just title and favoritesButton', () => {
    let component;

    beforeEach(() => {
      const store = testStore({
        header: {
          showBackButton: false,
          showFavoritesButton: true,
          title: 'My Binge List'
        }
      })
      component = shallow(<Header store={store} />).childAt(0).dive();
    });

    it('Should render', () => {
      const wrapper = findByTestAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    })

    it('Should renders title', () => {
      const text = findByTestAttr(component, 'title');
      expect(text.text()).toBe('My Binge List')
    })

    it('Should NOT renders back button', () => {
      const backButton = findByTestAttr(component, 'backButton');
      expect(backButton.length).toBe(0)
    })

    it('Should renders favorites button', () => {
      const favoritesButton = findByTestAttr(component, 'favoritesButton');
      expect(favoritesButton.length).toBe(1)
    })

  })


})