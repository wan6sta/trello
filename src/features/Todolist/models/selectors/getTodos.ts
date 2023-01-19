import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/providers/StoreProvider/config/store'

export const getTodos = createSelector(
  (state: RootState) => state.todo,
  todo => todo.data
)
