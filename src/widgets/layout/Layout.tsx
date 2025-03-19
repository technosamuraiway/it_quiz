import { Outlet } from 'react-router-dom'
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'

import s from './Layout.module.scss'

function Layout() {
  return (
    <div className={s.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
