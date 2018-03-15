import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import BuyerAppointmentPage from './BuyerAppointmentPage';

function setup(saving) {
  const props = {
    car: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<BuyerAppointmentPage {...props} />);
}

describe('BuyerAppointmentPage via Enzyme', () => {
  it('renders div and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('h1').text()).toEqual('Appointments');
  });

});
