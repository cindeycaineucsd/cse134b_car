import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCarPage} from './ManageCarPage';

describe ('Manage Car Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveCar: () => { return Promise.resolve(); },
                 deleteCar: () => { return Promise.resolve(); }},
      car: {id: '', watchHref: '', make: '', model: '', year: '', mileage: '', transmission: '', color: '', titlestatus: '', price: ''}
    };

    const wrapper = mount(<ManageCarPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
  });
});
