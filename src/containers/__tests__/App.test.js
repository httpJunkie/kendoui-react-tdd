import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App", function () {

  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a MyLocations', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('MyLocations');
    expect(locators.length).toBe(1);
  })

});
