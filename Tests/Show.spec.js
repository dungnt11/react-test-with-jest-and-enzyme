import React from 'react';
import { shallow } from 'enzyme';

import Show from '../src/Components/Show';

describe('Show list', () => {
  let app;

  beforeEach(() => {
    app = shallow(<Show />);
  });

  // check render two component
  it('App render ', () => {
    expect(app.find('Add').length).toEqual(1);
    expect(app.find('List').length).toEqual(1);
  });

  it('update list', () => {
    const add = app.find('Add').first();
    add.props().onAdd('Name 1');
    app.update();
    const list = app.find('List').first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEqual('Name 1');
  });
});