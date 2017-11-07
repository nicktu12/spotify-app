import * as actions from './TopSongs-actions';
import { mockAccessToken } from '../Utilities/mockData';

describe('TopSongs actions', ()=>{
  it('should create an action to detect token when songs are loading', ()=>{
    const expectedAction = {
      type: 'LOAD_SONGS',
      token: mockAccessToken
    };
    expect(actions.loadSongsAction(mockAccessToken)).toEqual(expectedAction);
  });

  it('should create an action to detect token when songs are loading', ()=>{
    const expectedAction = {
      type: 'LOAD_SONGS_SHORT_TERM',
      token: mockAccessToken
    };
    expect(actions.loadSongsShortTerm(mockAccessToken)).toEqual(expectedAction);
  });

  it('should create an action to detect token when songs are loading', ()=>{
    const expectedAction = {
      type: 'LOAD_SONGS_ALL_TIME',
      token: mockAccessToken
    };
    expect(actions.loadSongsAllTime(mockAccessToken)).toEqual(expectedAction);
  });
});
