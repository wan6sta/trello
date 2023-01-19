import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState } from '../types/todoModel'
import { fetchTodos } from '../services/fetchTodos/fetchTodos'
import { isError } from 'shared/lib/action/isError/isError'
import { isPending } from 'shared/lib/action/isPending/isPending'
import { addTodo } from '../services/addTodo/addTodo'
import { deleteTodo } from '../services/deleteTodo/deleteTodo'
import { updateTodoTitle } from '../services/updateTodoTitle/updateTodoTitle'

const initialState: TodoInitialState = {
  data: [],
  isLoading: false,
  error: null
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false

        state.data = action.payload
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false

        state.data.unshift(action.payload)
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false
        const todoId = action.payload
        const todoDeleteIndex = state.data.findIndex(todo => todo.id === todoId)
        if (todoDeleteIndex === -1) return

        state.data.splice(todoDeleteIndex, 1)
      })
      .addCase(updateTodoTitle.fulfilled, (state, action) => {
        state.isLoading = false
        const { todoId, title } = action.payload
        const todoUpdateIndex = state.data.findIndex(todo => todo.id === todoId)
        if (todoUpdateIndex === -1) return

        state.data[todoUpdateIndex].title = title
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

export const { reducer: todoReducer } = todoSlice
export const { actions: todoActions } = todoSlice
