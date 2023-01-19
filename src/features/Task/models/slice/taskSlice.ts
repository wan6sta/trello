import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isError } from 'shared/lib/action/isError/isError'
import { isPending } from 'shared/lib/action/isPending/isPending'
import { TaskInitialState } from '../types/taskModel'
import { fetchTasks } from '../services/fetchTasks/fetchTasks'
import { addTask } from '../services/addTask/addTask'
import { deleteTask } from '../services/deleteTask/deleteTask'
import { updateTask } from '../services/updateTask/updateTask'

const initialState: TaskInitialState = {
  data: {},
  isLoading: false,
  error: null
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false
        const { todoId, tasks } = action.payload

        state.data[todoId] = tasks
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false
        const { todoId, task } = action.payload

        state.data[todoId].unshift(task)
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false
        const { todoId, taskId } = action.payload
        const deleteTaskIndex = state.data[todoId].findIndex(
          task => task.id === taskId
        )
        if (deleteTaskIndex === -1) return

        state.data[todoId].splice(deleteTaskIndex, 1)
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false
        const { todoId, task: newTask } = action.payload
        let taskIndex = state.data[todoId].findIndex(
          task => task.id === newTask.id
        )
        if (taskIndex === -1) return

        state.data[todoId][taskIndex] = newTask
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addMatcher(isPending, state => {
        state.error = null
        state.isLoading = true
      })
  }
})

export const { reducer: taskReducer } = taskSlice
export const { actions: taskActions } = taskSlice
