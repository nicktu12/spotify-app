import { accessToken, topArtists, userInfo } from './Login-reducer';
import { 
  mockAccessToken, 
  mockTopArtists, 
  mockUserInfo, 
} from '../Utilities/mockData';

describe('Login reducers', ()=> {
  it('should have a default state for access token reducer', ()=>{
    expect(accessToken(undefined, {})).toEqual('');
  });
        
  it('should return an access token when passed an action', ()=>{
    const action = { type: 'ACCESS_TOKENS', accessToken: mockAccessToken };

    expect(accessToken(undefined, action)).toEqual(mockAccessToken);
  });

  it('should have a default state for top artists reducer', ()=>{
    expect(topArtists(undefined, [])).toEqual([]);      
  });

  it('should return a top artists array when passed an action', ()=>{
    const action = { type: 'TOP_ARTISTS', topArtists: mockTopArtists };

    expect(topArtists(undefined, action)).toEqual(mockTopArtists);
  });

  it('should have a default state for user info reducer', ()=> {
    expect(userInfo(undefined, {})).toEqual({});
  });

  it('should return user info when passed an action', ()=>{
    const action = { type: 'USER_INFO', userInfo: mockUserInfo };

    expect(userInfo(undefined, action)).toEqual(mockUserInfo);
  });

});
