export function initApiRes(state= {}, action) {
  switch(action.type) {
    case 'INIT_SPOTIFY_CALL':
      return action
    default:
      return state
  }
}

export function apiError(state='', action) {
  switch(action.type) {
    case 'SPOTIFY_API_ERROR':
      return action.message
    default: 
      return state
  }
}

export function apiSuccess(state={}, action) {
  switch(action.type) {
    case 'SPOTIFY_SUCCESS':
      return action
    default:
      return state
  }
}
