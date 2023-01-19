import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState } from '../types/todoModel'
import { fetchTodos } from '../services/fetchTodos/fetchTodos'
import { isError } from 'shared/lib/action/isError/isError'
import { isPending } from 'shared/lib/action/isPending/isPending'
import { addTodo } from '../services/addTodo/addTodo'
import { deleteTodo } from '../services/deleteTodo/deleteTodo'
import { updateTodoTitle } from '../services/updateTodoTitle/updateTodoTitle'
import { isFulfilled } from 'shared/lib/action/isFulfilled/isFulfilled'

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
      .addCase(fetchTodos.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.data = action.payload.map(todo => ({ ...todo, isLoading: false }))
      })
      .addCase(addTodo.pending, state => {
        state.isLoading = true
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        const newTodo = { ...action.payload, isLoading: false }
        state.data.unshift(newTodo)
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const todoId = action.payload
        const todoDeleteIndex = state.data.findIndex(todo => todo.id === todoId)
        if (todoDeleteIndex === -1) return

        state.data.splice(todoDeleteIndex, 1)
      })
      .addCase(updateTodoTitle.fulfilled, (state, action) => {
        const { todoId, title } = action.payload
        const todoUpdateIndex = state.data.findIndex(todo => todo.id === todoId)
        if (todoUpdateIndex === -1) return

        state.data[todoUpdateIndex].title = title
      })
      .addMatcher(isPending('todo'), state => {
        state.error = null
      })
      .addMatcher(isFulfilled('todo'), state => {
        state.isLoading = false
      })
      .addMatcher(isError('todo'), (state, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: todoReducer } = todoSlice
export const { actions: todoActions } = todoSlice
