import { combineReducers } from 'redux';
import { accessToken, topArtists } from '../Login/Login-reducer';
import { authCode } from '../Home/Home-reducer';
import { topSongs } from '../Playlist/Playlist-reducer';

export default combineReducers({
  authCode, 
  accessToken, 
  topArtists,
  topSongs
});
