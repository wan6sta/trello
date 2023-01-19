import cls from './EditableSpan.module.scss'
import { ChangeEvent, FC, memo, useState } from 'react'
import { Input } from 'shared/ui/Input/Input'

interface Props {
  initialValue: string
}

export const EditableSpan: FC<Props> = memo(props => {
  const { initialValue } = props
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState(initialValue)

  const showHandler = () => {
    setIsOpen(true)
  }

  const saveHandler = () => {
    if (!inputValue) return
    setIsOpen(false)
  }

  const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <div className={cls.EditableSpan} onClick={showHandler}>
      {isOpen ? (
        <Input
          value={inputValue}
          onChange={changeInputValueHandler}
          onBlur={saveHandler}
          autoFocus
          type='text'
          placeholder='Enter a title for the todo'
        />
      ) : (
        <span>{inputValue}</span>
      )}
    </div>
  )
})
