import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App", function () {

  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a MyLocations', () => {
    let mountedApp = shallow(<App />);
    const myLocations = mountedApp.find('MyLocations');
    expect(myLocations.length).toBe(1);
  });

});
