import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'//global import


createRoot(document.getElementById('root')).render(//dom manipulation
  <StrictMode>
    <App />
  </StrictMode>,
)
