import { spawn } from 'redux-saga/effects';

import favNumSaga from './favNumSaga';

export default function* rootSaga() {
  console.log('Hello From Redux-Saga!');

  yield spawn(favNumSaga);
}
