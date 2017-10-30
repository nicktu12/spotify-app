import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchSwapi, getAccessToken, getTopArtists, getTopSongs } from './helpers.js';

function* testSagas (action) {
  try {
    const apiStuff = yield call(fetchSwapi, 'https://galvanize-cors-proxy.herokuapp.com/https://accounts.spotify.com/authorize/?client_id=6f67e11fa50a413f9bf17697789322aa&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-private%20user-read-email%20user-read-recently-played&show_dialog=true&state=34fFs29kd09');
    yield put({type: 'SAGAS_TEST_SUCCESS', stuff: apiStuff});
  } catch (e) {
    yield put({type: 'YA_FUCKED_UP', message: e.message});
  }
  console.log('called!!!', action);
}

function* loginSagas (action) {
  try {
    const result = yield call(fetchSwapi, 'https://galvanize-cors-proxy.herokuapp.com/https://accounts.spotify.com/authorize/?client_id=6f67e11fa50a413f9bf17697789322aa&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-private%20user-read-email&state=34fFs29kd09');
    yield put({type: 'LOGIN_SUCCESS', result});
  } catch (e) {
    yield put({type:'LOGIN_SAGAS_ERROR', message: e.message});
  } 
}

function* getAccess (action) {
	try {
		const accessToken = yield call(getAccessToken, action.code);	
		yield put({type: 'ACCESS_TOKENS', accessToken});
		const topArtists = yield call(getTopArtists, accessToken);
		yield put({type: 'TOP_ARTISTS', topArtists});
	} catch (e) {
		yield put({type: 'ACCESS_ERROR', message: e.message});
	}
}

function* getSongs (action) {
	try {
		const topSongs = yield call(getTopSongs, action.token)			
		yield put({type: 'TOP_SONGS', topSongs})
	} catch (e) {
		yield put({type: 'GET_SONGS_ERROR', message: e.message});
	}
}

function* mySaga() {
				//  yield takeLatest('TEST_CLICK', testSagas)
				//  yield takeLatest('INIT_LOGIN', loginSagas)
	yield takeLatest('AUTH_CODE', getAccess)
	yield takeLatest('LOAD_SONGS', getSongs)
}

export default mySaga;
