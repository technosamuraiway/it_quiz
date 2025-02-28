import { createBrowserRouter, Outlet } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <header>APP_APP</header>
        <Outlet />
      </>
    ),

    children: [],
  },
])
