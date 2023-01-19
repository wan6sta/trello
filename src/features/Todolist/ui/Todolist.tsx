import cls from './Todolist.module.scss'
import { FC, memo } from 'react'

interface Props {
  title: string
  todoId: string
}

export const Todolist: FC<Props> = memo(props => {
  const { title, todoId } = props

  return <div className={cls.Todolist}>{title}</div>
})
