import { CustomerAction, CustomerActionTypes, CustomerState, ICustomer } from '../types'

const initialState: CustomerState = {
  customers: []
}

export const customerReducer = (state = initialState, action: CustomerAction): CustomerState => {
  switch (action.type) {
    case CustomerActionTypes.ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] }
    case CustomerActionTypes.ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
    case CustomerActionTypes.REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer: ICustomer): boolean => customer.id !== action.payload)
      }
    default:
      return state
  }
}
