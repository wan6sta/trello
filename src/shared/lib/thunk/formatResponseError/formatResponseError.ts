interface Response {
  data: {
    messages: string[]
  }
}

export const formatResponseError = (res: Response): string => {
  const errorMsg = res.data.messages[0]

  if (errorMsg) return errorMsg

  return 'Some error occurred'
}
