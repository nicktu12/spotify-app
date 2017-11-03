export const accessTokenAction = (accessToken) => {
  return {
    type: 'ACCESS_TOKENS',
    accessToken
  };
};

export const topArtistsAction = (topArtists) => {
  return {
    type: 'TOP_ARTISTS',
    topArtists
  };
};
