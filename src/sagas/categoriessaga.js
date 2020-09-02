import {takeEvery ,call,put} from 'redux-saga/effects'
import {CATEGORIES,ITEMS} from '../actions/constants'
import fetchCategories from '../Api/fetchCategories'
import fetchItems from '../Api/fetchItems'
import {setcategories,seterror} from '../actions/categoryActionCreater'
import {setitems,setitemerror} from '../actions/itemActioncreator'
import fireDb from '../components/firebase'

function* handlecategoryload() {
  try {
    const categories =yield call(fetchCategories)
    const items=yield call(fetchItems)
    yield put(setcategories(categories))
    yield put(setitems(items))
  }
  catch(err) {
    console.log("error" , err)
   	yield put(seterror(err))
    yield put(setitemerror(err))
  }
}
export default function* watchCategoryload() {
  yield takeEvery(CATEGORIES.LOAD,handlecategoryload)
}

