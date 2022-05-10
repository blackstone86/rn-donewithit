export type AppImageInputProps = {
  onChange?: (values?: string[]) => void
  max?: number
}

export type StateType = {
  values: string[]
}

export enum ActionKind {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

export type ActionType = {
  type: ActionKind
  payload: any
}
