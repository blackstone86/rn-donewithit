export type AppImageInputProps = {
  onChange?: (values?: string[]) => void
  onAddButtonPress?: () => void
  max?: number
  addButtonBackgroundColor?: string
  addButtonIconName?: string
  addButtonIconColor?: string
  addButtonIconSize?: number
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
