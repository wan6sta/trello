import cls from './MainPage.module.scss'
import { useEffect } from 'react'
import {
  fetchTodos,
  getTodoError,
  getTodoLoading,
  getTodos
} from 'features/Todolist'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'

export const MainPage = () => {
  const dispatch = useAppDispatch()
  const todolists = useAppSelector(getTodos)
  const error = useAppSelector(getTodoError)
  const isLoading = useAppSelector(getTodoLoading)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className={cls.MainPage}>
      {todolists?.map(todo => (
        <div>{todo.title}</div>
      ))}
    </div>
  )
}
