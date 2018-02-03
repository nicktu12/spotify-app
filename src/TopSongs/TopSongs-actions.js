export const loadSongsAction = (token) => {
  return {
    type: 'LOAD_SONGS',
    token
  };
};

export const postPlaylist = (token, id, array) => {
  return {
    type: 'POST_PLAYLIST',
    actionPayload: {token, id, array}
  };
};
