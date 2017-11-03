import { topSongs } from './Playlist-reducer';
import { mockTopSongs } from '../Utilities/mockData';

describe('Playlist reducers', ()=>{
  it('should have a default state for top songs reducer', ()=>{
    expect(topSongs(undefined, {})).toEqual([]);
  });

  it('should return top songs when passed an action', ()=>{
    const action = { type: 'TOP_SONGS', topSongs: mockTopSongs };

    expect(topSongs(undefined, action)).toEqual(mockTopSongs);
  });
});
