import { createAsyncThunk } from '@reduxjs/toolkit'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'
import { taskApi } from '../../../api/taskApi'
import { TaskModel } from '../../types/taskModel'

interface ReturnData {
  tasks: TaskModel[]
  todoId: string
}

export const fetchTasks = createAsyncThunk<
  ReturnData,
  string,
  { rejectValue: string }
>('task/fetchTasks', async (todoId, { rejectWithValue }) => {
  try {
    const res = await taskApi.getTasks(todoId)
    if (!res.data.error) return { tasks: res.data?.items, todoId }

    return rejectWithValue(res.data?.error)
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
