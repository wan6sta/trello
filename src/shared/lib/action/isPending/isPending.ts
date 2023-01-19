import { AnyAction } from '@reduxjs/toolkit'

export const isPending = (reducer: string) => (action: AnyAction) => {
  return action.type.startsWith(reducer) && action.type.endsWith('pending')
}
