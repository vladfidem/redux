import { FC, useCallback } from 'react'
import { RootState, useAppDispatch, useAppSelector } from './store'
import { incrementCountWorker, decrementCountWorker, fetchUsers } from './actions'
import { IUser } from './types'

export const App: FC = () => {
  const { count } = useAppSelector((state: RootState) => state.count)
  const { users } = useAppSelector((state: RootState) => state.users)
  const dispatch = useAppDispatch()

  const increment = useCallback(() => dispatch(incrementCountWorker()), [dispatch])
  const decrement = useCallback(() => dispatch(decrementCountWorker()), [dispatch])
  const getUsers = useCallback(() => dispatch(fetchUsers()), [dispatch])

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={getUsers}>Get users</button>
      <h1>Count: {count}</h1>
      <div>
        {users.map((user: IUser) => <h3 key={user.id}>{user.name}</h3>)}
      </div>
    </div>
  )
}
