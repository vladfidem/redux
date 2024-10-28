import { put, takeEvery, PutEffect } from 'redux-saga/effects'
import { decrementCount, incrementCount } from '../actions'
import { CountActionTypes, DecrementCountAction, IncrementCountAction } from '../types'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementWorker(): Generator<unknown, void, PutEffect<IncrementCountAction>> {
  yield delay(1000)
  yield put(incrementCount())
}

function* decrementWorker(): Generator<unknown, void, PutEffect<DecrementCountAction>> {
  yield delay(1000)
  yield put(decrementCount())
}

export function* countWatcher(): Generator {
  yield takeEvery(CountActionTypes.INCREMENT_WORKER, incrementWorker)
  yield takeEvery(CountActionTypes.DECREMENT_WORKER, decrementWorker)
}
