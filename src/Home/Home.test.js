import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import { mockTopArtists, mockUserInfo, mockAccessToken } from '../Utilities/mockData';


describe('Home component tests', ()=>{
  it('should match snapshot render', ()=>{
    const mockFunc = jest.fn();
    const mockStore = configureStore();
    const initialState = {
      accessToken: '',
      topArtists: [],
      topSongs: [],
      topSongsShortTerm: [],
      topSongsAllTime: [],
      userInfo: {},
    }
    const store = mockStore(initialState);
    const wrapper = shallow(
      <Home 
        history={[]}
        store={store}
        authCodeToSagas={mockFunc}
        topArtists={mockTopArtists}
        userInfo={mockUserInfo}
        token={mockAccessToken}
      />
    ) 

    console.log(wrapper.debug())
    console.log(wrapper.instance().renderTopArtists)

    expect(wrapper).toMatchSnapshot();
  })
})
