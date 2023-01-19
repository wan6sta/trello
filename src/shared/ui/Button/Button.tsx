import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = props => {
  const { children, ...restProps } = props

  return (
    <button className={cls.Button} {...restProps}>
      {children}
    </button>
  )
}
