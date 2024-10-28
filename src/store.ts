import { useDispatch, useSelector } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import { countReducer, userReducer } from './reducers'
import { rootWatcher } from './saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  count: countReducer,
  users: userReducer,
})

export const store =
  createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
