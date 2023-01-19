import { RootState } from 'app/providers/StoreProvider/config/store'

export const getTodoLoading = (state: RootState) => state.todo.isLoading
