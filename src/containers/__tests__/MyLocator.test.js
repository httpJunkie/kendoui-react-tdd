import React from 'react';
import { shallow } from 'enzyme';
import MyLocations from '../MyLocations';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe("MyLocations", function () {

  let mountedMyLocations;
  beforeEach(() => {
    mountedMyLocations = shallow(<MyLocations />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<MyLocations />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls axios.get in #componentDidMount', () => {
    return mountedMyLocations.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalled();
    })
  });

  it('calls axios.get with correct url', () => {
    return mountedMyLocations.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/locations.json');
    })
  });

  it('updates state with api data', () => {
    return mountedMyCities.instance().componentDidMount().then(() => {
      expect(mountedMyCities.state()).toHaveProperty('locations',
        [{
          "city": "test city",
          "address": "test address"
        }]
      );
    })
  });

  it('renders without crashing', () => {
    let mountedMyLocations = shallow(<MyLocations />);
  });

  it('renders a header', () => {
    const headers = mountedMyLocations.find('Header');
    expect(headers.length).toBe(1);
  });


  it('renders a map', () => {
    const maps = mountedMyLocations.find('Map');
    expect(maps.length).toBe(1);
  })
});

describe('chooseMap', () => {
  it('updates this.state.currentMap using the city passed to it', () => {
    let mountedMyLocations = shallow(<MyLocations />);
    let mockEvent = { target: { value: 'testland' } };
    mountedMyLocations.instance().chooseMap(mockEvent);
    expect(mountedMyLocations.instance().state.currentMap).toBe('testland.png');
  })
});