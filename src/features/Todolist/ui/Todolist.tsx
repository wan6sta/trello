import cls from './Todolist.module.scss'
import { FC, memo } from 'react'
import { AddItemForm } from 'widgets/AddItemForm'
import { EditableSpan } from 'widgets/EditableSpan'

interface Props {
  title: string
  todoId: string
}

export const Todolist: FC<Props> = memo(props => {
  const { title, todoId } = props

  return (
    <div className={cls.Todolist}>
      <div className={cls.innerTodo}>
        <EditableSpan initialValue={'asdasd'} />
        <AddItemForm title={'Add new todo'} />
      </div>
    </div>
  )
})
