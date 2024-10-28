import {
  CustomerActionTypes,
  AddCustomerAction,
  RemoveCustomerAction,
  ICustomer,
  AddManyCustomersAction
} from '../types'
import { customerService } from '../api'
import { AppDispatch } from '../hooks'

export const addManyCustomers = () => async (dispatch: AppDispatch): Promise<void> => {
  try {
    const customers: ICustomer[] = await customerService.getCustomers()
    const action: AddManyCustomersAction = {
      type: CustomerActionTypes.ADD_MANY_CUSTOMERS,
      payload: customers
    }

    dispatch(action)
  } catch (error) {
    console.error(error)
  }
}

export const addCustomer = (customer: ICustomer): AddCustomerAction => ({
  type: CustomerActionTypes.ADD_CUSTOMER,
  payload: customer
})

export const removeCustomer = (id: number): RemoveCustomerAction => ({
  type: CustomerActionTypes.REMOVE_CUSTOMER,
  payload: id
})
