import { all, AllEffect } from 'redux-saga/effects'
import { countWatcher } from './countSaga'
import { userWatcher } from './userSaga'

export function* rootWatcher(): Generator<AllEffect<Generator>> {
  yield all([countWatcher(), userWatcher()])
}
