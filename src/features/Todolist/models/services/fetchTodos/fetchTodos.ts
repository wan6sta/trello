import { createAsyncThunk } from '@reduxjs/toolkit'
import { todoApi } from '../../../api/todoApi'
import { TodoModel } from '../../types/todoModel'
import { formatAxiosError } from 'shared/lib/thunk/formatAxiosError/formatAxiosError'

export const fetchTodos = createAsyncThunk<
  TodoModel[],
  undefined,
  { rejectValue: string }
>('todo/fetchTodos', async (_, { rejectWithValue }) => {
  try {
    const res = await todoApi.getTodos()

    return res.data
  } catch (e) {
    return rejectWithValue(formatAxiosError(e))
  }
})
