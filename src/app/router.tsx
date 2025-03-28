import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import { ComponentsList } from '@/pages';
import Layout from '@/widgets/layout';

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
        path: '/components',
        element: <ComponentsList />,
      },
    ],
  },
]);
