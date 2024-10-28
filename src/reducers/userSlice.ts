import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../models/IUser'
import { fetchUsers } from '../actions/userAction'

interface UserState {
  users: IUser[]
  loading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.error = ''
        state.users = action.payload as IUser[]
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export default userSlice.reducer
