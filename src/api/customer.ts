import { get } from './api.ts'
import { ICustomer } from '../types'

export const customerService = {
  async getCustomers() {
    return await get<ICustomer[]>('/users')
  }
}
