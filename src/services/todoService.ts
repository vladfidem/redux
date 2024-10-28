import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodo } from '../models/ITodo.ts'

const baseUrl = import.meta.env.VITE_BASE_URL || '/';

export const todoService = createApi({
  reducerPath: 'todoAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Todo'],
  endpoints: (build) => ({
    fetchTodos: build.query<ITodo[], undefined>({
      query: () => ({
        url: '/todos',
      }),
      providesTags: () => ['Todo']
    }),
    createTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo']
    }),
    updateTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todo']
    }),
    deleteTodo: build.mutation<ITodo, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo']
    })
  })
})

export const { useFetchTodosQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoService
