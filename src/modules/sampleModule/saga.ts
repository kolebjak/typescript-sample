import { takeLatest, call, put } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { SAMPLE_MODULE_FETCH } from './constants'
import { SampleModuleFetchActionResponse, sampleModuleSetAction } from './actions'
import { getSomething } from '../fetcher'

function* fetch(action: SampleModuleFetchActionResponse): SagaIterator {
  console.log('fetch action')
  try {
    const result = yield call(getSomething)
    yield put(sampleModuleSetAction(result))
  } catch (e) {
    console.error(e.message)
  }
}

function* saga(): SagaIterator {
  yield takeLatest(SAMPLE_MODULE_FETCH, fetch)
}

export default saga
