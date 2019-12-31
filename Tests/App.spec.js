import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Header from '../src/Components/Header'
test('renders learn react link', () => {
  const header = renderer.create(<Header />).toJSON();
  expect(header).toMatchSnapshot();
});

describe('test text in snapshot', () => {
  it('get header in snapshot', () => {
    const header = shallow(<Header />);
    expect(header.find('div#name').text()).toEqual('dung')
  });
});