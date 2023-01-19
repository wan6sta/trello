import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'app/providers/StoreProvider'
import { App } from 'app/App'
import 'app/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
)
