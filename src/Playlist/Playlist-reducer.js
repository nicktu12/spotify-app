export function topSongs(state=[], action){
  switch (action.type) {
  case 'TOP_SONGS':
    return action.topSongs;
  default:
    return state;
  }
}

export function topSongsShortTerm(state=[], action) {
  switch (action.type) {
  case 'TOP_SONGS_SHORT_TERM':
    return action.topSongsShortTerm;
  default:
    return state;
  }
}
