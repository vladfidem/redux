import { FC } from 'react'
import { Balance, Customer, Todo } from './components'

export const App: FC = () => {
  return (
    <div>
      <Balance/>
      <br/>
      <Customer/>
      <br/>
      <Todo/>
    </div>
  )
}
