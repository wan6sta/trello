import { createAsyncThunk } from '@reduxjs/toolkit'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'
import { formatResponseError } from 'shared/lib/thunk/formatResponseError/formatResponseError'
import { taskApi } from '../../../api/taskApi'
import { AddNewTaskArgs, TaskModel } from '../../types/taskModel'

interface ReturnData {
  task: TaskModel
  todoId: string
}

export const addTask = createAsyncThunk<
  ReturnData,
  AddNewTaskArgs,
  { rejectValue: string }
>('task/deleteTodo', async (addTaskArgs, { rejectWithValue }) => {
  try {
    const res = await taskApi.addNewTask(addTaskArgs)
    if (res.data?.resultCode === 0)
      return { task: res.data?.data?.item, todoId: addTaskArgs.todoId }

    return rejectWithValue(formatResponseError(res))
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
