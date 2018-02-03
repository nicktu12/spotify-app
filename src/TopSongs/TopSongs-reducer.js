export function topSongs(state=[], action){
  switch (action.type) {
  case 'TOP_SONGS':
    return action.topSongs;
  default:
    return state;
  }
}

export function postPlaylist(state=[], action){
  switch (action.type) {
  case 'POST_PLAYLIST_SUCCESS':
    return action.playlistId;
  default:
    return state;
  }
}

