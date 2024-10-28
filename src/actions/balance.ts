import { BalanceActionTypes, AddFundsAction, RemoveFundsAction } from '../types'

export const addFunds = (count: number): AddFundsAction => ({
  type: BalanceActionTypes.ADD_FUNDS,
  payload: count
})

export const removeFunds = (count: number): RemoveFundsAction => ({
  type: BalanceActionTypes.REMOVE_FUNDS,
  payload: count
})
