// main.tsx
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import { CanvasKitProvider } from './context/CanvasKitContext'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CanvasKitProvider>
      <App />
    </CanvasKitProvider>
  </StrictMode>,
)
