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


