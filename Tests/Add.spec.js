import React from 'react';
import { mount } from 'enzyme';

import Add from '../src/Components/Add';

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<Add onAdd={onAdd} />);
  });

  it('Add requires onAdd props', () => {
    expect(add.props().onAdd).toBeDefined();
  })

  it('Add render button', () => {
    const button = add.find('button').first();
    expect(button).toBeDefined();
  });

  it('Button click call', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();

    input.simulate('change', { target: { value: 'dung' } });
    button.simulate('click');
    expect(onAdd).toHaveBeenCalledWith('dung');
  });
});