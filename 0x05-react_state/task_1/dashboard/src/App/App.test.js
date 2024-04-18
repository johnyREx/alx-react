import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

jest.mock('aphrodite');

const mountApp = (props = {}) => mount(<App {...props} />);
const shallowApp = (props = {}) => shallow(<App {...props} />);

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallowApp();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('does not contain CourseList component', () => {
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallowApp({ isLoggedIn: true });
  });

  it("does not include Login component", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it("includes CourseList component", () => {
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });
});

describe("Testing <App logOut={function} />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("calls logOut function and shows alert when keys control and h are pressed", () => {
    const logOutMock = jest.fn();
    const wrapper = mountApp({ logOut: logOutMock });
    const event = new KeyboardEvent('keydown', { bubbles: true, ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();

    wrapper.unmount();
  });
});

describe("Testing App Component's State", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallowApp();
  });

  it('checks if default value of displayDrawer in state is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('checks if handleDisplayDrawer updates displayDrawer to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('checks if handleHideDrawer updates displayDrawer to false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});