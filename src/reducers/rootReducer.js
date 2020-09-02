import {combineReducers } from 'redux'

import CategoryReducer from './CategoryReducer'
import ErrorReducer from './ErrorReducer'
import LoadReducer from './LoadReducer'
import ItemReducer from './ItemReducer'
import ItemErrorReducer from './ItemErrorReducer'
import ItemLoadReducer from  './ItemLoadReducer'


const rootReducer =combineReducers({
	isLoading:LoadReducer,
	categories:CategoryReducer,
	error:ErrorReducer,
	isitemloading:ItemLoadReducer,
	items:ItemReducer,
	itemerror:ItemErrorReducer,
})

export default rootReducer;