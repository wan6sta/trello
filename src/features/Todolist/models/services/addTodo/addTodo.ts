import { createAsyncThunk } from '@reduxjs/toolkit'
import { todoApi } from '../../../api/todoApi'
import { TodoModel } from '../../types/todoModel'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'
import { formatResponseError } from 'shared/lib/thunk/formatResponseError/formatResponseError'

export const addTodo = createAsyncThunk<
  TodoModel,
  string,
  { rejectValue: string }
>('todo/addTodo', async (todoTitle, { rejectWithValue }) => {
  try {
    const res = await todoApi.addNewTodo(todoTitle)
    if (res.data?.resultCode === 0) return res?.data?.data?.item

    return rejectWithValue(formatResponseError(res))
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
