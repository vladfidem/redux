import { FC, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, setTodoPage } from '../actions'

export const Todo: FC = () => {
  const dispatch = useAppDispatch()
  const { todos, loading, error, page, limit } = useAppSelector(state => state.todo)
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    (async () => dispatch(fetchTodos(page, limit)))()
  }, [dispatch, page, limit])

  const handleSetTodoPage = useCallback((p: number) => dispatch(setTodoPage(p)), [dispatch])

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Todo service</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
      {pages.map((p: number) => (
        <button key={p} style={{ padding: p === page ? 10 : 8 }} onClick={() => handleSetTodoPage(p)}>
          {p}
        </button>
      ))}
    </div>
  )
}
