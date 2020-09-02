import {CATEGORIES} from '../actions/constants'

const ErrorReducer = (state=null , action)=> {
	switch (action.type) {
		case CATEGORIES.LOAD_FAIL:
		return action.error
		case CATEGORIES.LOAD:
		case CATEGORIES.LOAD_SUCCESS:
		return null
    default:
    return state;
  }
}

export default ErrorReducer;