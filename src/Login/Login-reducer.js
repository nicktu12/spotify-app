export function accessToken(state='', action){
  switch (action.type) {
  case 'ACCESS_TOKENS':
    return action.accessToken;
  default:
    return state;
  }
}

export function topArtists(state=[], action){
  switch (action.type) {
  case 'TOP_ARTISTS':
    return action.topArtists;
  default:
    return state;
  }
}

export function userInfo(state={}, action){
  switch (action.type) {
  case 'USER_INFO':
    return action.userInfo;
  default:
    return state;
  }
}
