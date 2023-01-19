import { RootState } from 'app/providers/StoreProvider/config/store'

export const getTaskLoading = (state: RootState) => state.task.isLoading
