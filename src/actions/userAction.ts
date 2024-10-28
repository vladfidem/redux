import { FetchUsersAction, SetUsersAction, IUser, UserActionsTypes } from '../types'

export const fetchUsers = (): FetchUsersAction => ({ type: UserActionsTypes.FETCH_USERS })

export const setUsers = (users: IUser[]): SetUsersAction => ({
  type: UserActionsTypes.SET_USERS,
  payload: users,
})
