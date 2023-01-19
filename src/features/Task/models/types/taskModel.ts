export interface TaskModel {
  addedDate: string
  deadline: string
  description: string
  id: string
  order: number
  priority: number
  startDate: string
  status: TaskStatus
  title: string
  todoListId: string
}

export enum TaskStatus {
  'active',
  'completed'
}

export interface DefaultTaskResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface GetTasksResponse<T = []> {
  error: string
  items: T
  totalCount: number
}

export interface AddNewTaskArgs {
  todoId: string
  title: string
}

export interface DeleteTaskArgs {
  taskId: string
  todoId: string
}

export interface UpdateTaskModel {
  title: string
  description: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
}

export interface ChangeTaskArgs {
  taskId: string
  todoId: string
  newTask: UpdateTaskModel
}
