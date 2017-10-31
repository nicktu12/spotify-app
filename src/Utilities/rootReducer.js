import { combineReducers } from 'redux';
import { accessToken, topArtistsAction } from '../Login/Login-reducer';
import { authCode } from '../Home/Home-reducer';
import { topSongs } from '../Playlist/Playlist-reducer';

export default combineReducers({
	authCode, 
	accessToken, 
	topArtistsAction,
	topSongs
});
