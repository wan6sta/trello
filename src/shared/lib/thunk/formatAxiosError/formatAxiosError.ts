import axios from 'axios'

export const formatAxiosError = (e: any): string => {
  if (axios.isAxiosError(e)) {
    return e.message
  }
  return 'Some error occurred'
}
