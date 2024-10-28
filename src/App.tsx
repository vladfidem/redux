import { FC, useState } from 'react'
import { ITodo } from './models/ITodo.ts'
import { useFetchTodosQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from './services/todoService.ts'

export const App: FC = () => {
  const [value, setValue] = useState<string>('')

  const { data, isLoading, isError } = useFetchTodosQuery(undefined)
  const [createTodo] = useCreateTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  const handleCreateTodo = () => {
    if (data) {
      const newTodo: ITodo = { id: data[data.length - 1].id + 1, value, completed: false }
      createTodo(newTodo)
      setValue('')
    }
  }

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error!</div>

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <button onClick={handleCreateTodo}>Add</button>
      {data?.map(item => (
        <div key={item.id}>
          <input
            id={item.id} type="checkbox"
            onChange={() => updateTodo({ ...item, completed: !item.completed })}
          />
          <label htmlFor={item.id}>{item.value}</label>
          <button onClick={() => value.length && updateTodo({ ...item, value })}>Edit</button>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
