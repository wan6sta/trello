import cls from './Todolist.module.scss'
import { FC, memo, useEffect } from 'react'
import { AddItemForm } from 'widgets/AddItemForm'
import { EditableSpan } from 'widgets/EditableSpan'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { fetchTasks, getTaskLoading, getTasks } from '../../Task'
import { useAppSelector } from 'shared/hooks/useAppSelector'

import { PageLoader } from 'widgets/PageLoader'

interface Props {
  title: string
  todoId: string
}

export const Todolist: FC<Props> = memo(props => {
  const { title, todoId } = props
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(getTaskLoading)
  const tasks = useAppSelector(getTasks(todoId))

  useEffect(() => {
    dispatch(fetchTasks(todoId))
  }, [todoId])

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <div className={cls.Todolist}>
        <div className={cls.innerTodo}>
          <EditableSpan initialValue={title} />
          <div className={cls.tasks}>
            {tasks?.map(task => (
              <div>{task.title}</div>
            ))}
          </div>
          <AddItemForm title={'Add new todo'} />
        </div>
      </div>
    </>
  )
})
