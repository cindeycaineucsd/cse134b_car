import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import BuyerAppointmentPage from './BuyerAppointmentPage';

function setup(saving) {
  let props = {
    car: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<BuyerAppointmentPage {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('BuyerAppointmentPage via React Test Utils', () => {
  it('renders div and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('div');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

});
