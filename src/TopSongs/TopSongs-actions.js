export const loadSongsAction = (token) => {
  return {
    type: 'LOAD_SONGS',
    token
  };
};

export const loadSongsShortTerm = (token) => {
  return {
    type: 'LOAD_SONGS_SHORT_TERM',
    token
  };
};

export const loadSongsAllTime = (token) => {
  return {
    type: 'LOAD_SONGS_ALL_TIME',
    token
  };
};

export const postPlaylist = (token, id, array) => {
  return {
    type: 'POST_PLAYLIST',
    payload: {token, id, array}
  }
}
