import { configureStore } from '@reduxjs/toolkit'
import { todoService } from './services/todoService.ts'

export const store = configureStore({
  reducer: {
    [todoService.reducerPath]: todoService.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoService.middleware)
})
