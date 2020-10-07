import { put, call, takeEvery, select } from 'redux-saga/effects';

import {
  SET_LOADING,
  GET_PIECHARTS,
  GET_PIECHARTS_REQUESTED,
  GET_LOGS,
  GET_LOGS_REQUESTED,
  VOTE,
  VOTE_REQUESTED,
} from '../actions/favNumAction';

import { getPiecharts, vote, logs } from '../api/favNumApi';

function* getCharts() {
  yield put({ type: SET_LOADING });
  const date = yield select((store) => store.favNumReducer.date);
  const response = yield call(getPiecharts, date);
  yield put({ type: GET_PIECHARTS, payload: response });
}

function* voting() {
  yield put({ type: SET_LOADING });
  const number = yield select((store) => store.favNumReducer.currentNumber);
  const response = yield call(vote, number);
  yield put({ type: VOTE, payload: response });
}

function* getLogs() {
  const response = yield call(logs);
  yield put({ type: GET_LOGS, payload: response });
}

export default function* favNumSaga() {
  yield takeEvery(GET_PIECHARTS_REQUESTED, getCharts);
  yield takeEvery(VOTE_REQUESTED, voting);
  yield takeEvery(GET_LOGS_REQUESTED, getLogs);
}
