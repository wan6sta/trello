import { AxiosResponse } from 'axios'
import { apiInstance } from 'shared/config/apiInstance/apiInstance'
import {
  DefaultTodoResponse,
  TodoModel,
  UpdateTodoTitleArgs
} from '../models/types/todoModel'

export const todoApi = {
  getTodos: () => {
    return apiInstance.get<TodoModel[]>('/todo-lists')
  },
  addNewTodo: (title: string) => {
    return apiInstance.post<
      undefined,
      AxiosResponse<DefaultTodoResponse<{ item: TodoModel }>>,
      { title: string }
    >('/todo-lists', { title })
  },
  deleteTodo: (todoId: string) => {
    return apiInstance.delete<DefaultTodoResponse>(`/todo-lists/${todoId}`)
  },
  updateTodoTitle: ({ todoId, title }: UpdateTodoTitleArgs) => {
    return apiInstance.put<
      undefined,
      AxiosResponse<DefaultTodoResponse>,
      { title: string }
    >(`/todo-lists/${todoId}`, {
      title
    })
  }
}
