import { configureStore } from '@reduxjs/toolkit'
import user from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    user
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
