import * as actions from './Home-actions';
import { mockAuthCode } from '../Utilities/mockData';

describe('Home actions', ()=> {
  it('should create an action to detect authorization code', ()=>{
    const expectedAction = {
      type: 'AUTH_CODE',
      code: mockAuthCode 
    };
    expect(actions.saveAuthCodeAction(mockAuthCode)).toEqual(expectedAction);
  });
});
