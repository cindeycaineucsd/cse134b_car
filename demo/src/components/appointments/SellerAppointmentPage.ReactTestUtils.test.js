import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SellerAppointmentPage from './SellerAppointmentPage';

function setup(saving) {
  let props = {

    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<SellerAppointmentPage {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('SellerAppointmentPage via React Test Utils', () => {
  it('renders div and h1 and p', () => {
    const { output } = setup();
    expect(output.type).toBe('div');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

});
