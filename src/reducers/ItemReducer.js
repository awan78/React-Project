import {ITEMS} from '../actions/constants'

const ItemReducer = (state=[] , action)=> {
	switch(action.type) {
		case ITEMS.LOAD_SUCCESS: {
			return {
				...state, 
				...action.items
			}
			break
		}
		// case ITEMS.LOAD_SPECIFIC: {
		// 	return {
		// 		...state,
		//    	...action.payload.items
		//    }
		//    break
		//  }
		default: {
			return state 
		}
	}
}
export default ItemReducer


