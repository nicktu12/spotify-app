import { mockTopSongs } from '../Utilities/mockData';
import { 
  topSongs, 
  topSongsShortTerm, 
  topSongsAllTime, 
} from './Playlist-reducer';

describe('Playlist reducers', ()=>{
  it('should have a default state for top songs reducer', ()=>{
    expect(topSongs(undefined, {})).toEqual([]);
  });

  it('should return top songs when passed an action', ()=>{
    const action = { type: 'TOP_SONGS', topSongs: mockTopSongs };

    expect(topSongs(undefined, action)).toEqual(mockTopSongs);
  });

  it('should have a default state for top songs short term reducer', ()=>{
    expect(topSongsShortTerm(undefined, {})).toEqual([]);
  });

  it('should return top songs short term when passed an action', ()=>{
    const action = { 
      type: 'TOP_SONGS_SHORT_TERM', 
      topSongsShortTerm: mockTopSongs 
    };

    expect(topSongsShortTerm(undefined, action)).toEqual(mockTopSongs);
  });

  it('should have a default state for top songs all time reducer', ()=>{
    expect(topSongsAllTime(undefined, {})).toEqual([]);
  });

  it('should return top songs all time when passed an action', ()=>{
    const action = { 
      type: 'TOP_SONGS_ALL_TIME', 
      topSongsAllTime: mockTopSongs 
    };

    expect(topSongsAllTime(undefined, action)).toEqual(mockTopSongs);
  });
});
