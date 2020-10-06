import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  SET_LOADING,
  SET_DATE,
  GET_PIECHARTS,
  GET_PIECHARTS_REQUESTED,
  GET_LOGS,
  GET_LOGS_REQUESTED,
  VOTE,
  VOTE_REQUESTED,
} from '../actions/favNumAction';

import { getPiecharts } from '../api/favNumApi';

function* setDate() {
  yield put({ type: SET_DATE });
}

export default function* favNumSaga() {}
