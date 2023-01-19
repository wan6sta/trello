import { createAsyncThunk } from '@reduxjs/toolkit'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'
import { formatResponseError } from 'shared/lib/thunk/formatResponseError/formatResponseError'
import { taskApi } from '../../../api/taskApi'
import { DeleteTaskArgs } from '../../types/taskModel'

export const deleteTask = createAsyncThunk<
  DeleteTaskArgs,
  DeleteTaskArgs,
  { rejectValue: string }
>('task/deleteTask', async (deleteTaskArgs, { rejectWithValue }) => {
  try {
    const res = await taskApi.deleteTask(deleteTaskArgs)
    if (res.data?.resultCode === 0) return deleteTaskArgs

    return rejectWithValue(formatResponseError(res))
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
