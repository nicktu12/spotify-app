import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import TopArtists from './TopArtists';
import { 
  mockTopArtists, 
  mockUserInfo, 
  mockAccessToken,
} from '../Utilities/mockData';


describe('TopArtists component tests', ()=>{
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
    };
    const store = mockStore(initialState);
    const wrapper = shallow(
      <TopArtists 
        history={[]}
        store={store}
        authCodeToSagas={mockFunc}
        topArtists={mockTopArtists}
        userInfo={mockUserInfo}
        token={mockAccessToken}
      />
    ); 

    expect(wrapper).toMatchSnapshot();
  });
});
