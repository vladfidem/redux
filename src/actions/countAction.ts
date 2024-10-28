import {
  CountActionTypes,
  DecrementCountAction,
  IncrementCountAction,
  IncrementCountWorkerAction,
  DecrementCountWorkerAction
} from '../types'

export const incrementCountWorker = (): IncrementCountWorkerAction => ({ type: CountActionTypes.INCREMENT_WORKER })
export const decrementCountWorker = (): DecrementCountWorkerAction => ({ type: CountActionTypes.DECREMENT_WORKER })

export const incrementCount = (): IncrementCountAction => ({ type: CountActionTypes.INCREMENT })
export const decrementCount = (): DecrementCountAction => ({ type: CountActionTypes.DECREMENT })
