import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe("StoreLocator", function () {

    let mountedStoreLocator;
    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders correctly', ()=>{
        const tree = renderer.create(<StoreLocator />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls axios.get in #componentDidMount', ()=>{
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            expect(axios.get).toHaveBeenCalled();
        })
    });

    it('calls axios.get with correct url', ()=>{
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        })
    });

    it('updates state with api data', () => {
        return mountedStoreLocator.instance().componentDidMount().then(()=> {
          expect(mountedStoreLocator.state()).toHaveProperty('shops',
              [{
                  "location": "test location",
                  "address" : "test address"
              }]
          );
        })
        });

    it('renders without crashing', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders a header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });


    it('renders a map', () => {
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    })
});

describe('chooseMap', ()=> {
    it('updates this.state.currentMap using the location passed to it', ()=>{
        let mountedStoreLocator = shallow(<StoreLocator />);
        let mockEvent = {target:{value:'testland'}};
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
    })
});