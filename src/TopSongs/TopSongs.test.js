import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import TopSongs from './TopSongs';

describe('TopSongs component tests', ()=>{
  it('should match snapshot', ()=> {
    const mockFunc = jest.fn();
    const mockStore = configureStore();
    const initialState = { 
      accessToken: '',
      topSongs: [],
      topSongsShortTerm: [],
      topSongsAllTime: [],
      loadSongs: mockFunc,
      loadSongsShortTerm: mockFunc,
      loadSongsAllTime: mockFunc,
    };
    const store = mockStore(initialState);
    const wrapper = shallow(
      <TopSongs store={store} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
