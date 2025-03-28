import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';
import { Footer, Header } from '@/widgets';

function Layout() {
  return (
    <div className={s.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
