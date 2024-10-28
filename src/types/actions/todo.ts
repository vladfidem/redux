import { ITodo } from '../todo.ts'

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

export interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS
}

export interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS
  payload: ITodo[]
}

export interface FetchTodosFailedAction {
  type: TodoActionTypes.FETCH_TODOS_FAILED
  payload: string
}

export interface SetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE
  payload: number
}

export type TodoAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosFailedAction | SetTodoPageAction
