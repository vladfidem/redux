import { get } from './api.ts'
import { IUser } from '../types'

interface UserService {
  getUsers(): Promise<IUser[]>
}

export const userService: UserService = {
  async getUsers(): Promise<IUser[]> {
    return await get<IUser[]>('/users')
  }
}
