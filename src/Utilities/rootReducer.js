import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import { apiStuffAction, accessToken, topArtistsAction } from '../Login/Login-reducer';
import { authCode } from '../Home/Home-reducer';
import { topSongs } from '../Playlist/Playlist-reducer';

export default combineReducers({
	routing: routerReducer,
	apiShit: apiStuffAction,
	authCode, 
	accessToken, 
	topArtistsAction,
	topSongs
})

// https://accounts.spotify.com/authorize/?client_id=6f67e11fa50a413f9bf17697789322aa&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-private%20user-read-email&state=34fFs29kd09;
