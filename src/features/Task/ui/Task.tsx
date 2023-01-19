import cls from './Task.module.scss'
import { TaskModel } from '../models/types/taskModel'
import { FC, memo } from 'react'

interface Props {
  task: TaskModel
}

export const Task: FC<Props> = memo(props => {
  const { task } = props

  return (
    <div className={cls.Task}>
      <span className={cls.taskTitle}>{task.title}</span>
    </div>
  )
})
