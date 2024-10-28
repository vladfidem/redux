import { FC, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { addCustomer, addManyCustomers, removeCustomer } from '../actions'
import { ICustomer } from '../types'

export const Customer: FC = () => {
  const dispatch = useAppDispatch()
  const { customers } = useAppSelector(state => state.customer)

  const handleAddCustomer = useCallback(() => {
    const customerName: string | null = prompt('Enter customer name')

    if (customerName !== null) {
      const customer: ICustomer = {
        id: Date.now(),
        name: customerName
      }

      dispatch(addCustomer(customer))
    } else {
      alert('Please enter a valid name')
    }
  }, [dispatch])

  const handleRemoveCustomer = useCallback((id: number) => () => dispatch(removeCustomer(id)), [dispatch])

  const handleGetCustomers = useCallback(() => dispatch(addManyCustomers()), [dispatch])

  return (
    <div>
      <h1>Customer service</h1>
      <button onClick={handleAddCustomer}>Add customer</button>
      <button onClick={handleGetCustomers}>Add customers from base</button>
      <div>
        {customers.map((customer: ICustomer) => (
          <h3 key={customer.id} onClick={handleRemoveCustomer(customer.id)}>{customer.name}</h3>
        ))}
      </div>
    </div>
  )
}
