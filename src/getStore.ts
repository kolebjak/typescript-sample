import { createStore, applyMiddleware, compose, combineReducers, Reducer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { History } from 'history'
import { State } from './types'
import sampleModuleReducer from './modules/sampleModule/reducer'

// tslint:disable-next-line
declare const window: any

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer: Reducer<State> = combineReducers({
  routerReducer,
  sampleModuleReducer,
})
export default (history: History) => {
  const sagaMiddleware = createSagaMiddleware()
  const router = routerMiddleware(history)
  return {
    ...createStore(
      rootReducer,
      composeEnhancers(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(router),
      )),
    runSaga: sagaMiddleware.run,
  }
}
