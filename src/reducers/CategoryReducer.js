import {CATEGORIES} from '../actions/constants'

const CategoryReducer = (state=[] , action)=> {
	if(action.type===CATEGORIES.LOAD_SUCCESS) {
		return {
			...state , 
			...action.categories
		}
	}
	return state 
}

export default CategoryReducer;