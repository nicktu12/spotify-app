export function accessToken(state='', action) {
	switch(action.type) {
		case 'ACCESS_TOKEN':
			return action
		default:
			return state
	}
}
