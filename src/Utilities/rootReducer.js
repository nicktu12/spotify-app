import { combineReducers } from 'redux';
import {
  accessToken, 
  topArtists, 
  userInfo,
  recentlyPlayed,
} from '../Login/Access-reducer';
import { 
  topSongs,
  postPlaylist,
} from '../TopSongs/TopSongs-reducer';

export default combineReducers({
  accessToken, 
  topArtists,
  topSongs,
  postPlaylist,
  userInfo,
  recentlyPlayed,
});
