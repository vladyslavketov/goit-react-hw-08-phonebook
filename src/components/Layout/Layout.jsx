import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Navigation } from 'components/Navigation/Navigation';

import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <Suspense
        fallback={<div style={{ padding: '0 20px' }}>Loading...</div>}
      >
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}

export default Layout;
