import cls from './AddItemForm.module.scss'
import { ChangeEvent, FC, memo, useState } from 'react'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface Props {
  title: string
}

export const AddItemForm: FC<Props> = memo(props => {
  const { title } = props
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const showHandler = () => {
    setIsOpen(true)
  }

  const resetHandler = () => {
    setIsOpen(false)
    setInputValue('')
  }

  const saveHandler = () => {
    if (!inputValue) return
    setInputValue('')
  }

  const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  if (!isOpen)
    return (
      <button onClick={showHandler} className={cls.addButton}>
        <PlusIcon />
        {title}
      </button>
    )

  return (
    <div className={cls.AddItemForm}>
      <Input
        value={inputValue}
        onChange={changeInputValueHandler}
        autoFocus
        type='text'
        placeholder='Enter a title for the task'
      />
      <div className={cls.saveCloseWrapper}>
        <Button onClick={saveHandler}>Save</Button>
        <XMarkIcon onClick={resetHandler} />
      </div>
    </div>
  )
})
