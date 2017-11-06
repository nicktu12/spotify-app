import * as sagas from './sagas';
import { getTopSongs } from './helpers';
import { call } from 'redux-saga/effects';

describe('Sagas test', ()=>{
  it.skip('should be true', assert=>{
    const loadSongsGen = sagas.default[1]();
    
    assert.deepEqual(
      loadSongsGen.next().value,
      call(getTopSongs, 'token'),
      'it should do something',
    );
    assert.end();
  });
});
