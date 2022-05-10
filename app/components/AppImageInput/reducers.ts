import { StateType, ActionType, ActionKind } from './types'

export function reducer(state: StateType, action: ActionType): StateType {
  const { values } = state
  const { type, payload } = action
  switch (type) {
    case ActionKind.ADD:
      const uri = payload
      const idx = values.findIndex((value: string) => {
        return value === uri
      })
      const isExist = idx !== -1
      if (!isExist) return { values: [...values, uri] }
      return state
    case ActionKind.REMOVE:
      const index = payload
      values.splice(index, 1)
      return { values: [...values] }
  }
}
