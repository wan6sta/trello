import { createAsyncThunk } from '@reduxjs/toolkit'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'
import { formatResponseError } from 'shared/lib/thunk/formatResponseError/formatResponseError'
import { taskApi } from '../../../api/taskApi'
import {
  PartialUpdateTaskArgs,
  TaskInitialState,
  TaskModel,
  UpdateTaskModel
} from '../../types/taskModel'

interface ReturnData {
  task: TaskModel
  todoId: string
}

interface ThunkConfig {
  rejectValue: string
  state: { task: TaskInitialState }
}

export const updateTask = createAsyncThunk<
  ReturnData,
  PartialUpdateTaskArgs,
  ThunkConfig
>('task/updateTask', async (updateTaskArgs, { rejectWithValue, getState }) => {
  try {
    const { taskId, todoId, newTask } = updateTaskArgs
    const tasks = getState()?.task?.data
    const oldTask = tasks[todoId].find(task => task.id === taskId) || {}
    const finalUpdateTaskArgs = {
      taskId,
      todoId,
      newTask: {
        ...oldTask,
        ...newTask
      } as UpdateTaskModel
    }
    const res = await taskApi.updateTask(finalUpdateTaskArgs)
    if (res.data?.resultCode === 0)
      return { task: res.data?.data?.item, todoId }

    return rejectWithValue(formatResponseError(res))
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
