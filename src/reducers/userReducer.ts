import { UserState, UserAction, UserActionsTypes } from '../types'

const initialState: UserState = {
  users: []
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionsTypes.SET_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}
