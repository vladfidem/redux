import { get } from './api.ts'

export const todoService = {
  async getTodos(query?: Record<string, string | number>) {
    return await get('/todos', query)
  }
}
