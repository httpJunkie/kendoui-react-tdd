import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe("Button", function () {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders a button', () => {
    const button = mountedButton.find('button');
    expect(button.length).toBe(1);
  });

  it('call a function passed to it when clicked', () => {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack} />);
    mountedButtonWithCallback.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe("When a city is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = { city: "Cocoa Beach" };
    mountedButton = shallow(<Button {...props} />);
  });

  it('displays the city', () => {
    const locName = mountedButton.find('.city-button');
    expect(locName.text()).toEqual('Cocoa Beach');
  });
});

describe("When a city is passed as undefined", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = { city: undefined };
    mountedButton = shallow(<Button {...props} />);
  });

  it('displays the city', () => {
    const locName = mountedButton.find('.city-button');
    expect(locName.text()).toEqual('All cities');
  });

});
