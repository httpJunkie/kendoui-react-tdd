import React from 'react';
import { shallow } from 'enzyme';
import KendoButton from '../KendoButton';

describe("KendoButton", function () {
  let mountedKendoButton;

  beforeEach(() => {
    mountedKendoButton = shallow(<KendoButton />);
  });

  it('renders without crashing', () => {
    shallow(<KendoButton />);
  });

  it('renders a KendoButton', () => {
    const button = mountedButton.find('button');
    expect(button.length).toBe(1);
  });

  it('call a function passed to it when clicked', () => {
    const mockCallBack = jest.fn();
    const mountedKendoButtonWithCallback = shallow(<KendoButton handleClick={mockCallBack} />);
    mountedKendoButtonWithCallback.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe("When a city is passed to it", () => {
  let mountedKendoButton;
  let props;

  beforeEach(() => {
    props = { city: "San Francisco" };
    mountedKendoButton = shallow(<KendoButton {...props} />);
  });

  it('displays the city', () => {
    const locName = mountedKendoButton.find('.city-button');
    expect(locName.text()).toEqual('San Francisco');
  });
});

describe("When a city is passed as undefined", () => {
  let mountedKendoButton;
  let props;

  beforeEach(() => {
    props = { city: undefined };
    mountedKendoButton = shallow(<KendoButton {...props} />);
  });

  it('displays the city', () => {
    const locName = mountedKendoButton.find('.city-button');
    expect(locName.text()).toEqual('All cities');
  });

});
