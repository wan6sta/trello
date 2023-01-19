import { AnyAction } from '@reduxjs/toolkit'

export const isPending = (action: AnyAction) => {
  return action.type.endsWith('pending')
}
