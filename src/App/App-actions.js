export const initSpotifyConnection = (url) => {
  return {
    type: 'INIT_SPOTIFY_CALL',
    url
  }
}

export const spotifyApiError = (message) => {
  return {
    type: 'SPOTIFY_API_ERROR',
    message
  }
}

export const apiSuccess = (res) => {
  return {
    type: 'SPOTIFY_SUCCESS',
    res
  }
}

