import { AnyAction } from '@reduxjs/toolkit'

export const isError = (reducer: string) => (action: AnyAction) => {
  return action.type.startsWith(reducer) && action.type.endsWith('rejected')
}
