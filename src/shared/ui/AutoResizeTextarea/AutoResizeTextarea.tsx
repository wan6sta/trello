import cls from './AutoResizeTextarea.module.scss'
import { ChangeEvent, FC, useState } from 'react'

interface Props {
  title: string
}

export const AutoResizeTextarea: FC<Props> = ({ title }) => {
  const [textareaValue, setTextareaValue] = useState(title)

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.currentTarget.value)
  }

  const textAreaHeight = () => {
    const rowsCount = Math.ceil(textareaValue.length / 30) || 1
    return rowsCount * 20 - ((rowsCount * 20) / 100) * 5
  }

  return (
    <textarea
      value={textareaValue}
      onChange={changeHandler}
      style={{ height: `${textAreaHeight()}px` }}
      className={cls.AutoResizeTextarea}
    ></textarea>
  )
}
