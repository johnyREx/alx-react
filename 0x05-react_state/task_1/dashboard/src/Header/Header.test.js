import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Testing <Header /> Component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render an <h1> tag", () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it("should render an <img> tag", () => {
    expect(wrapper.find('img').length).toBe(1);
  });
});
