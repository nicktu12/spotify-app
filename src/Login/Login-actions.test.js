import * as actions from './Login-actions';
import { mockAccessToken, mockTopArtists } from '../Utilities/mockData';

describe('Login actions', ()=> {
  it('should create an action to detect access tokens', ()=>{
    const expectedAction = {
      type: 'ACCESS_TOKENS',
      accessToken: mockAccessToken 
    };
    expect(actions.accessTokenAction(mockAccessToken)).toEqual(expectedAction);
  });

  it('should create an action to detect top artists', ()=>{
    const expectedAction = {
      type: 'TOP_ARTISTS',
      topArtists: mockTopArtists 
    };
    expect(actions.topArtistsAction(mockTopArtists)).toEqual(expectedAction);
  });
});
