export function topSongs(state=[], action){
  switch(action.type) {
		case 'TOP_SONGS':
			return action.topSongs
		default:
			return state;
	}
}
