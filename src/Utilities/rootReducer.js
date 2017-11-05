import { combineReducers } from 'redux';
import { accessToken, topArtists, userInfo } from '../Login/Login-reducer';
import { topSongs, topSongsShortTerm, topSongsAllTime } from '../Playlist/Playlist-reducer';

export default combineReducers({
  accessToken, 
  topArtists,
  topSongs,
  topSongsShortTerm,
  topSongsAllTime,
  userInfo,
});
