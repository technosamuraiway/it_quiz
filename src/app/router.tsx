import {createBrowserRouter} from 'react-router-dom'
import Home from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Home/>
      // <div style={{ backgroundColor: '#474d47', height: '100vh' }}>
      //   <header style={{ textAlign: 'center' }}>header</header>
      //   <Outlet />
      // </div>
    ),
    // children: [
    //   {
    //     path: '/',
    //     element: <MockPage />,
    //   },
    // ],
  },
])
