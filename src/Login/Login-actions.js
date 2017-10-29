export const testClickAction  = (string) => {
  return {
    type: 'TEST_CLICK',
    data: string
  }
}

export const apiStuffAction = (stuff) => {
  return {
    type: 'SAGAS_TEST_SUCCESS',
    stuff
  }
}

export const handleLoginAction = () => {
  return {
    type: 'INIT_LOGIN'
  }
}

export const accessTokenAction = (accessToken) => {
  return {
	  type: 'ACCESS_TOKENS',
    accessToken
	}
}
