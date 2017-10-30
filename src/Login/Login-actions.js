export const apiStuffAction = (stuff) => {
  return {
    type: 'SAGAS_TEST_SUCCESS',
    stuff
  }
}

export const accessTokenAction = (accessToken) => {
  return {
	  type: 'ACCESS_TOKENS',
    accessToken
	}
}

export const topArtistsAction = (topArtists) => {
	return {
		type: 'TOP_ARTISTS',
		topArtists
	}
}
