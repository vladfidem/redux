import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './actions/userAction'

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const { users, loading, error } = useAppSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}
