import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { FETCH } from './myConstants';
import { FetchActionResponse, setAction } from './myActions';
import { getSomething } from './fetcher/index';

function* fetch(action: FetchActionResponse): SagaIterator {
  console.log('fetch action');
  try {
    const result = yield call(getSomething);
    yield put(setAction(result));
  } catch (e) {
    console.error(e.message);
  }
}
function* saga(): SagaIterator {
  yield takeLatest(FETCH, fetch);
}
export default saga;
