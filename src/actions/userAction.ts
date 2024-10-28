import { createAsyncThunk } from '@reduxjs/toolkit'
import { userService } from '../api/userService'

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await userService.getUsers()
    } catch (error: any) {
      throw thunkAPI.rejectWithValue(error.message)
    }
  }
)
