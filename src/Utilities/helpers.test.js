import * as helpers from './helpers';
import { mockAuthUrl } from './mockData';

describe('helpers test', ()=>{
  it('should be able to clean the authorization url', ()=>{
    const expectedResult = helpers.authCodeCleaner(mockAuthUrl);
    expect(expectedResult).toEqual('pa5JzPajt3zwO9laGX...');
  });
});
