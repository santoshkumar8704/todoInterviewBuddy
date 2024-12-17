import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestApp from './TestApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestApp />
    <App />
  </StrictMode>,
)
