import {ITEMS} from '../actions/constants'

const ItemErrorReducer = (state=null , action)=> {
	switch (action.type) {
		case ITEMS.LOAD_FAIL:
		return action.error
		case ITEMS.LOAD:
		case ITEMS.LOAD_SUCCESS:
    return null
    default:
    return state
  }
}

export default ItemErrorReducer;