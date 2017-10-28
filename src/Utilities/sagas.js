import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchSwapi } from './test-helper';

function* testSagas (action) {
  try {
    const apiStuff = yield call(fetchSwapi, 'https://galvanize-cors-proxy.herokuapp.com/https://accounts.spotify.com/authorize/?client_id=6f67e11fa50a413f9bf17697789322aa&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-private%20user-read-email&state=34fFs29kd09');
    yield put({type: 'SAGAS_TEST_SUCCESS', stuff: apiStuff});
  } catch (e) {
    yield put({type: 'YA_FUCKED_UP', message: e.message});
  }
  console.log('called!!!', action);
}

function* mySaga() {
  yield takeLatest('TEST_CLICK', testSagas)
}

export default mySaga;
