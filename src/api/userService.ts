import { get } from './api'
import { IUser } from '../models/IUser'

export const userService = {
  async getUsers() {
    return await get<IUser[]>('/users')
  }
}
