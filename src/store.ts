import { applyMiddleware, createStore, Store } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './reducers'
import { ActionTypes, RootState } from './types'

export const store: Store<RootState, ActionTypes> =
  createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)))
