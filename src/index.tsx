import React from 'react'
import { createRoot } from 'react-dom/client'
import 'react-router-dom'
import App from './App'

const rootEl = document.getElementById('root') as HTMLElement

const root = createRoot(rootEl)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
