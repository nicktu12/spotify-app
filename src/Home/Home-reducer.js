export function authCode(state='', action) {
	switch(action.type) {
		case 'AUTH_CODE':
			return action
		default:
			return state
	}
}
