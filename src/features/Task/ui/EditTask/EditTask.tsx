import cls from './EditTask.module.scss'
import { useState } from 'react'
import { PencilIcon } from '@heroicons/react/24/solid'
import { Portal } from '../../../../shared/ui/Portal/Portal'
import { Button } from '../../../../shared/ui/Button/Button'

export const EditTask = () => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(true)
  }

  if (!open)
    return (
      <div onClick={openHandler} className={cls.pencilIconWrapper}>
        <PencilIcon />
      </div>
    )

  return (
    <Portal>
      <div className={cls.EditTask}>
        <textarea></textarea>
        <Button>Save</Button>
      </div>
    </Portal>
  )
}
