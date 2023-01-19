import { createAsyncThunk } from '@reduxjs/toolkit'
import { todoApi } from '../../../api/todoApi'
import { UpdateTodoTitleArgs } from '../../types/todoModel'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'
import { formatResponseError } from 'shared/lib/thunk/formatResponseError/formatResponseError'

export const updateTodoTitle = createAsyncThunk<
  UpdateTodoTitleArgs,
  UpdateTodoTitleArgs,
  { rejectValue: string }
>('todo/updateTodoTitle', async (updateArgs, { rejectWithValue }) => {
  try {
    const res = await todoApi.updateTodoTitle(updateArgs)
    if (res.data?.resultCode === 0) return updateArgs

    return rejectWithValue(formatResponseError(res))
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
