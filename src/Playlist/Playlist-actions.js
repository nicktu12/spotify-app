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
  }
}
