import { createBrowserRouter, Outlet } from 'react-router-dom'
import { MockPage } from '@/shared'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ backgroundColor: '#474d47', height: '100vh' }}>
        <header style={{ textAlign: 'center' }}>header</header>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <MockPage />,
      },
    ],
  },
])
