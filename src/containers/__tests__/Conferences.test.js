import React from 'react';
import { shallow } from 'enzyme';
import Conferences from '../Conferences';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe("Conferences", function () {

  let mountedConferences;
  beforeEach(() => {
    mountedConferences = shallow(<Conferences />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Conferences />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls axios.get in #componentDidMount', () => {
    return mountedConferences.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalled();
    })
  });

  it('calls axios.get with correct url', () => {
    return mountedConferences.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/conferences.json');
    })
  });

  it('updates state with api data', () => {
    return mountedConferences.instance().componentDidMount().then(() => {
      expect(mountedConferences.state()).toHaveProperty('conferences',
        [{
          "city": "test city",
          "address": "test address"
        }]
      );
    })
  });

  it('renders without crashing', () => {
    shallow(<Conferences />);
  });

  it('renders a header', () => {
    const headers = mountedConferences.find('Header');
    expect(headers.length).toBe(1);
  });


  it('renders a map', () => {
    const maps = mountedConferences.find('Map');
    expect(maps.length).toBe(1);
  })
});

describe('chooseMap', () => {
  it('updates this.state.currentMap using the city passed to it', () => {
    let mountedConferences = shallow(<Conferences />);
    let mockEvent = { target: { value: 'testland' } };
    mountedConferences.instance().chooseMap(mockEvent);
    expect(mountedConferences.instance().state.currentMap).toBe('testland.png');
  })
});