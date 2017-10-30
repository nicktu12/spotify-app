export function testClickAction(state = {}, action){
  switch (action.type) {
	  case 'TEST_CLICK':
		  return action.data
	  default:
		  return state;
  }
}

export function apiStuffAction(state={}, action){
  switch(action.type) {
    case 'SAGAS_TEST_SUCCESS':
	    return action
    default: 
	   return state;
  }
}

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
