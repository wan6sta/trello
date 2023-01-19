import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from 'features/Todolist'
import { taskReducer } from 'features/Task'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    task: taskReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
