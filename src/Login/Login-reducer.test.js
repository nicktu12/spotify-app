import { accessToken, topArtistsAction } from './Login-reducer';
import { mockAccessToken, mockTopArtists } from '../Utilities/mockData';

describe('Login reducers', ()=> {
	it('should have a default state for access token reducer', ()=>{
		expect(accessToken(undefined, {})).toEqual('')
	})
				
	it('should return an access token when passed an action', ()=>{
		const action = { type: 'ACCESS_TOKENS', accessToken: mockAccessToken }

		expect(accessToken(undefined, action)).toEqual(mockAccessToken)
	})

	it('should have a default state for top artists reducer', ()=>{
		expect(topArtistsAction(undefined, [])).toEqual([]);			
	})

	it('should return a top artists array when passed an action', ()=>{
		const expectedResult = { type: 'TOP_ARTISTS', topArtists: mockTopArtists }

		expect(topArtistsAction(undefined, expectedResult)).toEqual(expectedResult);
	})
})
