import cls from './MainPage.module.scss'
import { useEffect } from 'react'
import { fetchTodos, getTodoLoading, getTodos } from 'features/Todolist'
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
        {todolists?.map(todo => (
          <div>{todo.title}</div>
        ))}
      </div>
    </>
  )
}
