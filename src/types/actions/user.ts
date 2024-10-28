import { IUser } from '../user.ts'

export enum UserActionsTypes {
  FETCH_USERS = 'FETCH_USERS',
  SET_USERS = 'SET_USERS',
}

export interface FetchUsersAction {
  type: UserActionsTypes.FETCH_USERS
}

export interface SetUsersAction {
  type: UserActionsTypes.SET_USERS
  payload: IUser[]
}

export type UserAction = FetchUsersAction | SetUsersAction
