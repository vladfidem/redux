import { ITodo } from '../todo.ts'

export interface TodoState {
  todos: ITodo[]
  loading: boolean
  error: string | null
  limit: number
  page: number
}
