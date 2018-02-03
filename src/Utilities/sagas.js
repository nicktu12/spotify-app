import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  getAccessToken,
  getTopSongs, 
  createPlaylist,
  // addTracksToPlaylist,
} from './helpers.js';

function* getAccessAndInitialData (action) {
  try {
    const initialResponse = yield call(getAccessToken, action.code);  
    const accessToken = initialResponse.access_token;
    const recentlyPlayed = initialResponse.recentlyPlayed;
    const topArtists = initialResponse.topArtists;
    const userInfo = initialResponse.userInfo;
    yield put({type: 'ACCESS_TOKENS', accessToken});
    yield put({type: 'RECENTLY_PLAYED', recentlyPlayed});
    yield put({type: 'TOP_ARTISTS', topArtists});
    yield put({type: 'USER_INFO', userInfo});
  } catch (error) {
    yield put({type: 'ACCESS_ERROR', message: error.message});
  }
}

function* getSongs (action) {
  try {
    const topSongs = yield call(getTopSongs, action.token);
    yield put({type: 'TOP_SONGS', topSongs});
  } catch (error) {
    yield put({type: 'GET_SONGS_ERROR', message: error.message});
  }
}

function* postPlaylistToProfile (action) {
  try {
    const playlistId = yield call(createPlaylist, action.actionPayload);
    yield put({type: 'POST_PLAYLIST_SUCCESS', playlistId});
  } catch (error) {
    yield put({type: 'POST_PLAYLIST_ERROR', message: error.message});
  }
}

function* listenForAuth() {
  yield takeLatest('AUTH_CODE', getAccessAndInitialData);
}

function* listenForLoadSongs() {
  yield takeLatest('LOAD_SONGS', getSongs);
}

function* listenForPostPlaylist() {
  yield takeLatest('POST_PLAYLIST', postPlaylistToProfile);
}

export default [
  listenForAuth,
  listenForLoadSongs,
  listenForPostPlaylist,
];
