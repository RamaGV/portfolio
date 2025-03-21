import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import emailjs from '@emailjs/browser'

// Inicializar EmailJS con tu clave pública
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
