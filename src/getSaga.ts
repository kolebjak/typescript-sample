import { fork } from 'redux-saga/effects';
import mySaga from './modules/mySaga';

export default () => function* rootSaga() {
  const sagas = [
    yield fork(mySaga),
  ];
  yield sagas;
};
