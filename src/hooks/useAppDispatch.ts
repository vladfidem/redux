import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ActionTypes, RootState } from '../types'

export type AppDispatch = ThunkDispatch<RootState, unknown, ActionTypes>

export const useAppDispatch = () => useDispatch<AppDispatch>()
