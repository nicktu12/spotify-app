import { authCode } from './Home-reducer';
import { mockAuthCode } from '../Utilities/mockData';

describe('Home reducers', ()=> {
	it('should have a default state', ()=>{
		expect(authCode(undefined, {})).toEqual('')
	})
				
	it('should return an action when passed an action', ()=>{
		const expectedResult = {
			type: 'AUTH_CODE',
			code: mockAuthCode 
		}

		expect(authCode(undefined, expectedResult)).toEqual(expectedResult)
	})
})
