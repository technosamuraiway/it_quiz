import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from '@/pages/home'
import { ComponentsList } from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Outlet />
      // <div style={{ backgroundColor: '#474d47', height: '100vh' }}>
      //   <header style={{ textAlign: 'center' }}>header</header>
      //   <Outlet />
      // </div>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/components',
        element: <ComponentsList />,
      },
    ],
  },
])
