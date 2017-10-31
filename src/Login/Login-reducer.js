export function accessToken(state='', action){
  switch(action.type) {
		case 'ACCESS_TOKENS':
			return action.accessToken
		default:
			return state;
	}
}

export function topArtistsAction(state=[], action){
	switch(action.type) {
		case 'TOP_ARTISTS':
			return action
		default:
			return state;
	}
}
