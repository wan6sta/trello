import cls from './MainPage.module.scss'
import { useEffect } from 'react'
import {
  fetchTodos,
  getTodoLoading,
  getTodos,
  Todolist
} from 'features/Todolist'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { PageLoader } from 'widgets/PageLoader'

export const MainPage = () => {
  const dispatch = useAppDispatch()
  const todolists = useAppSelector(getTodos)
  const isLoading = useAppSelector(getTodoLoading)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div className={cls.MainPage}>
        <div className={cls.todolists}>
          {todolists?.map(todo => (
            <Todolist key={todo.id} title={todo.title} todoId={todo.id} />
          ))}
        </div>
      </div>
    </>
  )
}
