export enum CountActionTypes {
  INCREMENT = 'INCREMENT',
  INCREMENT_WORKER = 'INCREMENT_WORKER',
  DECREMENT = 'DECREMENT',
  DECREMENT_WORKER = 'DECREMENT_WORKER',
}

export interface IncrementCountAction {
  type: CountActionTypes.INCREMENT
}

export interface IncrementCountWorkerAction {
  type: CountActionTypes.INCREMENT_WORKER
}

export interface DecrementCountAction {
  type: CountActionTypes.DECREMENT
}

export interface DecrementCountWorkerAction {
  type: CountActionTypes.DECREMENT_WORKER
}

export type CountAction =
  | IncrementCountAction
  | IncrementCountWorkerAction
  | DecrementCountAction
  | DecrementCountWorkerAction
