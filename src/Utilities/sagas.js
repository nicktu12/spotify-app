import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchSwapi } from './test-helper';

function* testSagas (action) {
  try {
    const apiStuff = yield call(fetchSwapi, 'https://swapi.co/api/people/1/');
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
