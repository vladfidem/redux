export enum BalanceActionTypes {
  ADD_FUNDS = 'ADD_FUNDS',
  REMOVE_FUNDS = 'REMOVE_FUNDS',
}

export interface AddFundsAction {
  type: BalanceActionTypes.ADD_FUNDS
  payload: number
}

export interface RemoveFundsAction {
  type: BalanceActionTypes.REMOVE_FUNDS
  payload: number
}

export type BalanceAction = AddFundsAction | RemoveFundsAction
