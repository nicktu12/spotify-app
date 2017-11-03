import * as actions from './Playlist-actions';
import { mockAccessToken } from '../Utilities/mockData';

describe('Playlist actions', ()=>{
  it('should create an action to detect token when songs are loading', ()=>{
    const expectedAction = {
      type: 'LOAD_SONGS',
      token: mockAccessToken
    };
    expect(actions.loadSongsAction(mockAccessToken)).toEqual(expectedAction);
  });
});
