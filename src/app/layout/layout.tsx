import { Outlet } from 'react-router-dom'

import s from './layout.module.scss'
import { Footer, Header } from '@/widgets'

export function Layout() {
  return (
    <div className={s.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
