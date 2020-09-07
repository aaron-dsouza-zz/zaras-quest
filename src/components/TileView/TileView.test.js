import React from 'react';
import { shallow } from 'enzyme';
import TileView from './TileView';

describe('TileView', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<TileView />);
    expect(wrapper).toMatchSnapshot();
  });
});
