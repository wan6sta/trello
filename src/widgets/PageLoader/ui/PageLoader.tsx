import cls from './PageLoader.module.scss'
import { BarLoader } from 'react-spinners'
import { FC, memo } from 'react'

interface Props {
  isLoading: boolean
}

export const PageLoader: FC<Props> = memo(({ isLoading }) => {
  if (!isLoading) return null

  return (
    <div className={cls.PageLoader}>
      <BarLoader width='100%' color='#8DDBE0' />
    </div>
  )
})
