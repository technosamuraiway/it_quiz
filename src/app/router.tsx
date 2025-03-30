import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import { ComponentsList, Questions, Quiz } from '@/pages'
import AnswerDetails from '../pages/answer-details'
import { Layout } from './layout'

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
        path: '/quiz/:id',
        element: <Quiz />,
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
    ],
  },
])
