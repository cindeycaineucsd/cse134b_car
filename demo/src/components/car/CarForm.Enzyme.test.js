import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CarForm from './CarForm';

function setup(saving) {
  const props = {
    car: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CarForm {...props} />);
}

describe('CarForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Car');
  });

});
