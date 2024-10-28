import { TodoAction, TodoActionTypes, TodoState } from '../types'

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  limit: 0,
  page: 1,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true, error: null }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload }
    case TodoActionTypes.FETCH_TODOS_FAILED:
      return { ...state, loading: false, error: action.payload }
    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
