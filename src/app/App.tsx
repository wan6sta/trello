import { MainPage } from '../pages/MainPage'
import { ErrorAlert } from 'widgets/ErrorAlert'

export const App = () => {
  return (
    <div className='app'>
      <MainPage />
      <ErrorAlert />
    </div>
  )
}
