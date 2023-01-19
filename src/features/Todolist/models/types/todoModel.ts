export interface TodoModel {
  id: string
  title: string
  order: number
  addedDate: string
}

export interface DefaultTodoResponse<T = {}> {
  resultCode: number
  messages: string[]
  fieldsErrors: string[]
  data: T
}

export interface UpdateTodoTitleArgs {
  todoId: string
  title: string
}
