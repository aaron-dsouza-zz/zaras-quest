import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

describe('Tile', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper).toMatchSnapshot();
  });
});
