import { createBrowserRouter, Outlet } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ backgroundColor: '#474d47', height: '100vh' }}>
        <header style={{ textAlign: 'center' }}>header</header>

        <main style={{ marginTop: '50px' }}>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <li>js</li>
            <li>ts</li>
            <li>html</li>
            <li>react</li>
            <li>css</li>
          </ul>
        </main>
        <Outlet />
      </div>
    ),
    children: [],
  },
])
