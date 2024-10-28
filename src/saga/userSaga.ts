import { call, put, takeEvery } from 'redux-saga/effects'
import { userService } from '../api'
import { setUsers } from '../actions'
import { IUser, UserActionsTypes } from '../types'

function* fetchUsersWorker(): Generator<unknown, void, IUser[]> {
  try {
    const users: IUser[] = yield call(userService.getUsers)
    yield put(setUsers(users))
  } catch (error) {
    console.log(error)
  }
}

export function* userWatcher(): Generator {
  yield takeEvery(UserActionsTypes.FETCH_USERS, fetchUsersWorker)
}
