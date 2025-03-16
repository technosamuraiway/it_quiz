import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import Home from '@/pages/home'
import s from './Router.module.scss'
import { ComponentsList } from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className={s.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
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
