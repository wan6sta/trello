import cls from './Input.module.scss'
import { FC, InputHTMLAttributes, memo } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<Props> = memo(props => {
  const { ...restProps } = props

  return <input className={cls.Input} {...restProps} />
})
