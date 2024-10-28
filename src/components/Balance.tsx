import { FC, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { addFunds, removeFunds } from '../actions'

export const Balance: FC = () => {
  const dispatch = useAppDispatch()
  const { balance } = useAppSelector(state => state.balance)

  const handleTransaction = useCallback((operation: 'add' | 'remove'): void => {
    const promptMessage: string = operation === 'add' ? 'How much to add?' : 'How much to remove?'
    const count: number = Number(prompt(promptMessage))

    if (!Number.isNaN(count) && count > 0) {
      dispatch(operation === 'add' ? addFunds(count) : removeFunds(count))
    } else {
      alert('Please enter a valid number')
    }
  }, [dispatch])

  return (
    <div>
      <h1>Balance service</h1>
      <h2>Balance: {balance}</h2>
      <button onClick={() => handleTransaction('add')}>Add funds</button>
      <button onClick={() => handleTransaction('remove')}>Remove funds</button>
    </div>
  )
}
