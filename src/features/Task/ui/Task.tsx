import cls from './Task.module.scss'
import { TaskModel } from '../models/types/taskModel'
import { FC, memo, useState } from 'react'
import { PencilIcon } from '@heroicons/react/24/solid'
import { AutoResizeTextarea } from 'shared/ui/AutoResizeTextarea/AutoResizeTextarea'

interface Props {
  task: TaskModel
}

export const Task: FC<Props> = memo(props => {
  const { task } = props
  const [taskHover, setTaskHover] = useState(false)
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(true)
  }

  const onTaskHover = () => {
    setTaskHover(true)
  }

  const onTaskLeave = () => {
    setTaskHover(false)
  }

  if (open) {
    return (
      <div className={cls.EditTask}>
        <AutoResizeTextarea title={task.title} />
      </div>
    )
  }

  return (
    <div
      onMouseLeave={onTaskLeave}
      onMouseOver={onTaskHover}
      className={cls.Task}
    >
      <span className={cls.taskTitle}>{task.title}</span>
      {taskHover ? (
        <div onClick={openHandler} className={cls.pencilIconWrapper}>
          <PencilIcon />
        </div>
      ) : null}
    </div>
  )
})
