import { ICustomer } from '../index.ts'

export enum CustomerActionTypes {
  ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS',
  ADD_CUSTOMER = 'ADD_CUSTOMER',
  REMOVE_CUSTOMER = 'REMOVE_CUSTOMER',
}

export interface AddManyCustomersAction {
  type: CustomerActionTypes.ADD_MANY_CUSTOMERS
  payload: ICustomer[]
}

export interface AddCustomerAction {
  type: CustomerActionTypes.ADD_CUSTOMER
  payload: ICustomer
}

export interface RemoveCustomerAction {
  type: CustomerActionTypes.REMOVE_CUSTOMER
  payload: number
}

export type CustomerAction = AddCustomerAction | AddManyCustomersAction | RemoveCustomerAction
