import {ITEMS} from './constants'

const loadspecific = (data,cat_id) => (dispatch) => {
	console.log('dataaa',data,cat_id)
  return dispatch ({ 
  	type: ITEMS.LOAD_SPECIFIC,
    payload: {
    	cat_id:cat_id,
    	items:data.filter(item=>item.categoryId === cat_id)
    }
  })
}

const loaditems = ()=>({
	type:ITEMS.LOAD
})

const setitems = items =>({
  type:ITEMS.LOAD_SUCCESS,
  items,
})

const setitemerror = error =>({
    type:ITEMS.LOAD_FAIL,
    error,
})

export {
	loadspecific,
	loaditems,
	setitems,
	setitemerror
	

};