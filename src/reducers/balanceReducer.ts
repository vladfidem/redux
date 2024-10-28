import { BalanceAction, BalanceActionTypes, BalanceState } from '../types'

const initialState: BalanceState = {
  balance: 0
}

export const balanceReducer = (state = initialState, action: BalanceAction): BalanceState => {
  switch (action.type) {
    case BalanceActionTypes.ADD_FUNDS:
      return { ...state, balance: state.balance + action.payload }
    case BalanceActionTypes.REMOVE_FUNDS:
      return { ...state, balance: state.balance - action.payload }
    default:
      return state
  }
}
