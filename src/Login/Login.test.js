import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';

describe('Login component tests', ()=>{
  it('should match snapshot render', ()=>{
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  })
})
