import { fork } from 'redux-saga/effects'
import sampleModuleSaga from './modules/sampleModule/saga'

export default () => function* rootSaga() {
  const sagas = [
    yield fork(sampleModuleSaga),
  ]
  yield sagas
}
