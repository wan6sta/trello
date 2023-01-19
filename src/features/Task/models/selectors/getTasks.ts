import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/providers/StoreProvider/config/store'

export const getTasks = (todoId: string) =>
  createSelector(
    (state: RootState) => state.task,
    task => task.data[todoId]
  )
