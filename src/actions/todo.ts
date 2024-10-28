import { AppDispatch } from '../hooks'
import { ITodo, TodoAction, TodoActionTypes } from '../types'
import { todoService } from '../api/todo.ts'

export const fetchTodos = (page: number, limit: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: TodoActionTypes.FETCH_TODOS })
    const response = await todoService.getTodos({ _page: page, _limit: limit })
    dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response as ITodo[] })
  } catch (error) {
    dispatch({ type: TodoActionTypes.FETCH_TODOS_FAILED, payload: error as string })
  }
}

export const setTodoPage = (page: number): TodoAction => ({
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: page
})
