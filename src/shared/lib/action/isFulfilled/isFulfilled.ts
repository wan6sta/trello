import { AnyAction } from '@reduxjs/toolkit'

export const isFulfilled = (reducer: string) => (action: AnyAction) => {
  return action.type.startsWith(reducer) && action.type.endsWith('fulfilled')
}
