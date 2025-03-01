import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { router } from '@/app/router'
import { RouterProvider } from 'react-router-dom'

window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const register = await navigator.serviceWorker.register('/sw.js')
      console.log(register)
      console.log('SW register success')
    } catch (error) {
      console.log('SW register failed')
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
