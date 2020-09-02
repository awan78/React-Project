import {CATEGORIES} from '../actions/constants'

const LoadReducer = (state=false , action)=> {
	switch (action.type) {
		case CATEGORIES.LOAD:
		return true
		case CATEGORIES.LOAD_SUCCESS:
		return false
		case CATEGORIES.LOAD_FAIL:
    return false
    default:
    return state
  }
}
export default LoadReducer