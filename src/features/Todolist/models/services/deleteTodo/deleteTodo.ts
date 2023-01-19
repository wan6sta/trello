import { createAsyncThunk } from '@reduxjs/toolkit'
import { todoApi } from '../../../api/todoApi'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'
import { formatResponseError } from 'shared/lib/thunk/formatResponseError/formatResponseError'

export const deleteTodo = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('todo/deleteTodo', async (todoId, { rejectWithValue }) => {
  try {
    const res = await todoApi.deleteTodo(todoId)
    if (res.data?.resultCode === 0) return todoId

    return rejectWithValue(formatResponseError(res))
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
