import { combineReducers } from 'redux'
import { balanceReducer } from './balanceReducer'
import { customerReducer } from './customerReducer'
import { todoReducer } from './todoReducer'

export const rootReducer = combineReducers({
  balance: balanceReducer,
  customer: customerReducer,
  todo: todoReducer,
})
