import React from 'react';
import { shallow } from 'enzyme';
import { Meter } from './Meter';

describe('Meter test', ()=>{
  it('should match snapshot render', ()=>{
    const wrapper = shallow(<Meter />);

    expect(wrapper).toMatchSnapshot();
  });
});
