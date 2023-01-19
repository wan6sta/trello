import { RootState } from 'app/providers/StoreProvider/config/store'

export const getTodoError = (state: RootState) => state.todo.error
