import {createStore, applyMiddleware ,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootsaga from '../sagas'
import rootReducer from '../reducers/rootReducer'

const configurestore = () => {
	const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer , applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootsaga);
	return store;
}
export default configurestore;