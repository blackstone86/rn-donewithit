export type AppImageInputProps = {
  onChange?: (values?: string[]) => void
  onAddButtonPress?: () => void
  imgageUris?: string[]
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
  REMOVE = 'REMOVE',
  UPDATE = 'UPDATE'
}

export type ActionType = {
  type: ActionKind
  payload: any
}
