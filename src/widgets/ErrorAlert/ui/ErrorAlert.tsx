import { useAppSelector } from 'shared/hooks/useAppSelector'
import { getTodoError } from 'features/Todolist'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const ErrorAlert = () => {
  const error = useAppSelector(getTodoError)

  useEffect(() => {
    if (error) toast.error(error)
  }, [error])

  return <Toaster />
}
