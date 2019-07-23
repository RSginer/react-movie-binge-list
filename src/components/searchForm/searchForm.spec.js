import React from 'react';
import SearchForm from './searchForm';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/test/index';

describe('SearchForm Component', () => {

  let component;

  beforeEach(() => {
    const props = {
      inputValue: 'Sciense Finction',
      inputChange: () => null,
      searchSubmit: () => null
    }

    component = shallow(<SearchForm {...props} />);
  })
  
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'searchFormComponent')
    expect(wrapper.length).toBe(1);
  });

  it ('Should render the input', () => {
    const logo = findByTestAttr(component, 'searchInput')
    expect(logo.length).toBe(1);
  });

  it ('Should render the button', () => {
    const logo = findByTestAttr(component, 'submitButton')
    expect(logo.length).toBe(1);
  });
});


