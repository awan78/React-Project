import {ITEMS} from '../actions/constants'

const ItemLoadReducer = (state=false , action)=> {
	switch (action.type) {
		case ITEMS.LOAD:
		return true
		case ITEMS.LOAD_SUCCESS:
		return false
		case ITEMS.LOAD_FAIL:
    return false
    default:
    return state
  }
}

export default ItemLoadReducer