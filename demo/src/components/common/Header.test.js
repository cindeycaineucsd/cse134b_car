import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {Header} from './Header';

describe ('Header', () => {
  it('sign-in works', () => {
    const props = {
        logged: false
    };

    const wrapper = mount(<Header {...props}/>);
    const loginButton = wrapper.find('FlatButton').first();
    expect(saveButton.prop('title')).toBe('Sign Up');
    saveButton.simulate('click');

  });
});