export function testClickAction(state = {}, action){
  switch (action.type) {
	  case 'TEST_CLICK':
		  return action.data
	  default:
		  return state;
  }
}

export function apiStuffAction(state={}, action){
  switch(action.type) {
    case 'SAGAS_TEST_SUCCESS':
	    return action.stuff
    default: 
	   return state;
  }
}
