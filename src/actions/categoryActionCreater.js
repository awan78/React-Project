import {CATEGORIES} from './constants'

const loadcategories=() => ({
	type:CATEGORIES.LOAD
  })

const setcategories = categories => ({
  type:CATEGORIES.LOAD_SUCCESS,
  categories,
})

const seterror = error =>({
    type:CATEGORIES.LOAD_FAIL,
    error,
})

export {
	loadcategories,
	setcategories,
	seterror
}