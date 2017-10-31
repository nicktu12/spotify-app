import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import { accessToken, topArtistsAction } from '../Login/Login-reducer';
import { authCode } from '../Home/Home-reducer';
import { topSongs } from '../Playlist/Playlist-reducer';

export default combineReducers({
	routing: routerReducer,
	authCode, 
	accessToken, 
	topArtistsAction,
	topSongs
});
