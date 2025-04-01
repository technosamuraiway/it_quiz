import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import { ComponentsList } from '@/pages'
import Layout from '@/widgets/layout'
import Questions from '@/pages/questions'
import AnswerDetails from '../pages/answer-details'
import AdminPanel from '@/pages/admin-panel/AdminPanel'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/questions',
        element: <Questions />,
      },
      { path: '/questions/answer-details/:id', element: <AnswerDetails /> },
      {
        path: '/components',
        element: <ComponentsList />,
      },
      {
        path: '/admin',
        element: <AdminPanel />,
      },
    ],
  },
])
